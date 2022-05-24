import React, { useContext } from 'react';

import Loader from 'react-js-loader';

import Header from '../../components/Header';
import SearchCityContainer from '../../containers/SearchCityContainer';
import Main from '../../containers/Main';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Option from '../../components/Option';
import Button from '../../components/Button';
import TodayWeightContainer from '../../containers/TodayWeightContainer';
import TodayWeightData from '../../containers/TodayWeightData';
import RenderIf from '../../components/RenderIf';

import AppContext from '../../AppContext';

import states from '../../utils/states';

import './style.css';

export default function Home() {
    const { weightData, handleSubmit, handleChangeCityName, isLoading } = useContext(AppContext);

    const selectChildren = states.map((state) => {
        const { sigla } = state;
        return (<Option key={sigla} text={sigla} />);
    });

    // if (weightData) {
    //     const { city, date, description } = weightData;
    //     const dataArray = [city, date, description];

    //     setWeightDataArray(dataArray);
    // }

    // const todayData = weightDataArray
    // ? weightDataArray.map((data) => <div>{data}</div>)
    // : null;

    return (
        <div className="Home">
            <Header>
                <h1>APP DE CLIMA</h1>
            </Header>

            <SearchCityContainer>
                <Form func={(e) => handleSubmit(e, 'byCityAndState')} elementClass="Form-get-by-city">
                    <h2>BUSCAR USANDO CIDADE E ESTADO</h2>
                    <div className="Form-inputs">
                        <label>
                            Cidade
                        </label>
                        <Input func={handleChangeCityName} type="text" className="city-name" placeholder="digite o nome da sua cidade" />
                        <label htmlFor="">
                            Estado
                        </label>
                        <Select>
                            {selectChildren}
                        </Select>
                        <Button type="submit" text="procurar" elementClass="Form-submit" />
                    </div>
                </Form>

                <Form func={(e) => handleSubmit(e, 'byGeolocation')} elementClass="Form-get-by-geolocation">
                    <h2>BUSCAR POR GEOLOCALIZAÇÃO</h2>
                    <div className="Form-inputs">
                        <p>Isso exige que você permita o uso da sua localização. Deste modo só teremos acesso a dados da sua cidade.</p>
                        <Button type="submit" text="procurar" elementClass="Form-submit" />
                    </div>
                </Form>
            </SearchCityContainer>

            <Main>
                <TodayWeightContainer>
                    <RenderIf condition={ isLoading && !weightData }>
                        <h2>CLIMA PARA SUA CIDADE HOJE</h2>
                        <Loader type="spinner-default" bgColor="#000000" size={80} />
                    </RenderIf>
                    <RenderIf condition={!!weightData}>
                        <h2>CLIMA PARA SUA CIDADE HOJE</h2>
                        <TodayWeightData />
                    </RenderIf>
                </TodayWeightContainer>
            </Main>
        </div>
    );
}

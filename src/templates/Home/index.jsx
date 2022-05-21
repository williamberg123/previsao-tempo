import React, { useContext } from 'react';

import AppContext from '../../AppContext';
import Header from '../../components/Header';
import SearchCityContainer from '../../containers/SearchCityContainer';
import Main from '../../containers/Main';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';

import states from '../../utils/states';

import './style.css';
import Option from '../../components/Option';
import Button from '../../components/Button';

export default function Home() {
    const { handleSubmit } = useContext(AppContext);

    const selectChildren = states.map((state) => {
        const { sigla } = state;
        return (<Option key={sigla} text={sigla} />);
    });

    return (
        <div className="Home">
            <Header>
                <h1>APP DE CLIMA</h1>
            </Header>

            <SearchCityContainer>
                <Form func={handleSubmit}>
                    <Input type="text" className="city-name" />
                    <Select>
                        {selectChildren}
                    </Select>
                    <Button type="submit" text="procurar" elementClass="Form-submit" />
                </Form>
            </SearchCityContainer>

            <Main>
                <h2>erhuyrthg</h2>
            </Main>
        </div>
    );
}

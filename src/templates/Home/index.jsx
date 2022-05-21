import React, { useContext } from 'react';

import AppContext from '../../AppContext';
import Header from '../../components/Header';
import SearchCityContainer from '../../containers/SearchCityContainer';
import WeightItem from '../../components/WeightItem';
import Main from '../../containers/Main';
import Input from '../../components/Input';
import Select from '../../components/Select';

import states from '../../utils/states';

import './style.css';

export default function Home() {
    const { weighData } = useContext(AppContext);

    // const {
    //     city, currently, date, description, humidity, temp, time, wind_speedy, sunrise, sunset
    // } = weighData;

    const selectChildren = states.map((state) => {
        const { sigla } = state;
        return <option key={sigla} value={sigla}>{sigla}</option>
    });

    return (
        <div className="Home">
            <Header>
                <h1>CLIMA</h1>
            </Header>

            <SearchCityContainer>
                <Input type="text" className="city-name" />
                <Select>
                    {selectChildren}
                </Select>
            </SearchCityContainer>

            <Main>
                <h2>erhuyrthg</h2>
            </Main>
        </div>
    );
}

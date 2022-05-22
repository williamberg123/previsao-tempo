import React, { useContext } from 'react';

import { FaCloudSun, FaMoon, FaSun, FaWind, FaTemperatureLow, FaTemperatureHigh, FaClock } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { GiSunset, GiSunrise } from 'react-icons/gi';

import AppContext from '../../AppContext';
import RenderIf from '../../components/RenderIf';
import WeightItem from '../../components/WeightItem';

import './style.css';

export default function TodayWeightData() {
    const { weightData } = useContext(AppContext);

    const { city, currently, description, humidity, sunrise, sunset, temp, time, wind_speedy, forecast } = weightData;

    const { weekday, min, max, date } = forecast[0];

    const today = new Date();

    const isNight = today.getHours() >= 18 || today.getHours() <= 6;

    return (
        <div className="TodayWeightData">
            <WeightItem heading={`${city}`} paragraph={description}>
                <FaCloudSun />
            </WeightItem>

            <WeightItem heading={`${temp}oC`} paragraph="Temperatura">
                <RenderIf condition={ temp >= 30 }>
                    <FaTemperatureLow />
                </RenderIf>
                <RenderIf condition={ temp < 30 }>
                    <FaTemperatureHigh />
                </RenderIf>
            </WeightItem>

            <WeightItem heading={`${weekday} - ${date}`} paragraph={currently}>
                <RenderIf condition={ isNight }>
                    <FaMoon />
                </RenderIf>
                <RenderIf condition={ !isNight }>
                    <FaSun />
                </RenderIf>
            </WeightItem>

            <WeightItem heading={`${time}`} paragraph="Última atualização">
                <FaClock />
            </WeightItem>

            <WeightItem heading={`${humidity}%`} paragraph="Umidade do ar">
                <WiHumidity />
            </WeightItem>

            <WeightItem heading={`${min}oC`} paragraph="Temp. mínima para hoje">
                <FaTemperatureLow />
            </WeightItem>

            <WeightItem heading={`${max}oC`} paragraph="Temp. máxima para hoje">
                <FaTemperatureHigh />
            </WeightItem>

            <WeightItem heading={`${sunrise}`} paragraph="Nascer do sol">
                <GiSunrise />
            </WeightItem>

            <WeightItem heading={`${sunset}`} paragraph="Pôr do sol">
                <GiSunset />
            </WeightItem>

            <WeightItem heading={`${wind_speedy}`} paragraph="Velocidade dos ventos">
                <FaWind />
            </WeightItem>
        </div>
    );
}

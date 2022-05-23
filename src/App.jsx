import React, { useCallback, useMemo, useState } from 'react';

import AppRoutes from './routes';
import AppContext from './AppContext';

import getWeightData from './utils/getWeightData';

import './App.css';

export default function App() {
	const [ weightData, setWeightData ] = useState(null);
	const [ cityName, setCityName ] = useState('');

	const loadWeightData = async (typeOfRequest, lat, lon, stringOfCity) => {
		const apiKeyOfficial = process.env.REACT_APP_API_KEY;
		const url = typeOfRequest === 'byGeolocation'
		? `https://api.hgbrasil.com/weather?key=${apiKeyOfficial}&lat=${lat}&lon=${lon}&user_ip=remote&format=json-cors`
		: `https://api.hgbrasil.com/weather?key=${apiKeyOfficial}&city_name=${stringOfCity}&format=json-cors`;
		
		const weight = await getWeightData(url);

		setWeightData(weight.data.results);
	};

	const generateStringOfCityRequest = (city, state) => `${city},${state}`;

	const getDataByGeolocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			
			loadWeightData('byGeolocation', lat, lon);
		});
	};

	const getDataByCityAndState = (cityName) => {
		if (!cityName) {
			alert('Insira o nome da cidade');
			return;
		}

		const select = document.querySelector('#select-of-states');
		const stateIndex = select.selectedIndex;

		const state = select[stateIndex].value;

		const stringOfCity = generateStringOfCityRequest(cityName, state);

		loadWeightData('byCity', '', '', stringOfCity);
	};

	const handleSubmit = useCallback((e, typeOfRequest) => {
		e.preventDefault();

		if (typeOfRequest === 'byGeolocation') {
			getDataByGeolocation();
		} else {
			getDataByCityAndState(cityName);
		}
	}, [cityName]);

	const handleChangeCityName = useCallback((e) => {
		const typedValue = e.target.value;
		setCityName(typedValue);
	}, []);

	const memoizedAppContext = useMemo(
		() => (
			{
				weightData, handleSubmit, handleChangeCityName, cityName,
			}),
		[weightData, cityName],
	);

	return (
		<div className="App">
			<AppContext.Provider value={ memoizedAppContext }>
				<AppRoutes />
			</AppContext.Provider>
		</div>
	);
}

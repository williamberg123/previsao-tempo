import React, { useCallback, useEffect, useMemo, useState } from 'react';

import AppRoutes from './routes';
import AppContext from './AppContext';

import fetchWeightData from './utils/fetchWeightData';

import './App.css';

export default function App() {
	const [ weightData, setWeightData ] = useState(null);
	const [ apiKey ] = useState('b14d1329');
	const [ latitude, setLatitude ] = useState('');
	const [ longitude, setLongitude ] = useState('');

	const loadWeightData = async () => {
		const url = `https://api.hgbrasil.com/weather?key=${apiKey}&lat=${latitude}&lon=${longitude}&user_ip=remote`;
		if (!latitude || !longitude) return;
		const weight = await fetchWeightData(url);
		setWeightData(weight);
	};

	const handleSubmit = useCallback((e) => {
		e.preventDefault();
	}, []);

	navigator.geolocation.getCurrentPosition((position) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		setLatitude(lat);
		setLongitude(lon);
	});

	useEffect(() => {
		loadWeightData();
	}, [latitude, longitude]);

	const memoizedAppContext = useMemo(() => ({ weightData, handleSubmit }), [weightData]);

	return (
		<div className="App">
			<AppContext.Provider value={ memoizedAppContext }>
				<AppRoutes />
			</AppContext.Provider>
		</div>
	);
}

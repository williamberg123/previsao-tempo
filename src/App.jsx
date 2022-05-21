import React, { useEffect, useMemo, useState } from 'react';

import AppRoutes from './routes';
import AppContext from './AppContext';

import fetchWeightData from './utils/fetchWeightData';

import './App.css';

export default function App() {
	const [ weightData, setWeightData ] = useState(null);
	const [ baseUrl ] = useState('https://api.hgbrasil.com/weather?woeid=456348&format=json-cors&key=b14d1329');
	const [ apiKey ] = useState('b14d1329');
	const [ woeid ] = useState('456348');

	const loadWeightData = async () => {
		const weightData = await fetchWeightData(baseUrl);
		setWeightData(weightData.data.results);
	}

	useEffect(() => {
		loadWeightData();
	}, []);

	console.log(weightData);

	const memoizedAppContext = useMemo(() => ({ weightData }), [weightData]);

	return (
		<div className="App">
			<AppContext.Provider value={ memoizedAppContext }>
				<AppRoutes />
			</AppContext.Provider>
		</div>
	);
}

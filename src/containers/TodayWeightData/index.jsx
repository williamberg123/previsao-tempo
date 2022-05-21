import React, { useContext } from 'react';

import AppContext from '../../AppContext';

export default function TodayWeightData() {
    const { weightData } = useContext(AppContext);

    const { city, date } = weightData;

    const containerChildren = [
        <div key={city}>{city}</div>,
        <div key={date}>{date}</div>,
    ];

    return (
        <div className="TodayWeightData">
            {containerChildren}
        </div>
    );
}

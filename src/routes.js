import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './templates/Home';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/previsao-tempo/" element={ <Home /> } />
        </Routes>
    );
}

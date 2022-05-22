import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function TodayWeightContainer({ children }) {
    return (
        <div className="TodayWeightContainer">
            {children}
        </div>
    );
}

TodayWeightContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function SearchCityContainer({ children }) {
    return (
        <div className="SearchCityContainer">
            {children}
        </div>
    );
}

SearchCityContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

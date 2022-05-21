import React from 'react';
import PropTypes from 'prop-types';

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

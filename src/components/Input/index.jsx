import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '../../AppContext';

export default function Input({ type, className, func, placeholder }) {
    const { cityName } = useContext(AppContext);

    return (
        <input
            placeholder={placeholder}
            onChange={(e) => func(e)}
            type={type}
            className={className}
            value={cityName}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    func: PropTypes.func,
    placeholder: PropTypes.string,
};

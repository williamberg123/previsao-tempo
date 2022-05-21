import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, className }) {
    return (
        <input type={type} className={className} />
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

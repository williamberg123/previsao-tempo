import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ type, text, elementClass }) {
    return (
        <button type={type} className={elementClass}>{text}</button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    elementClass: PropTypes.string,
};

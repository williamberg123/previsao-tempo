import React from 'react';
import PropTypes from 'prop-types';

export default function Option({ text }) {
    return (
        <option value={text}>
            {text}
        </option>
    );
}

Option.propTypes = {
    text: PropTypes.string.isRequired,
};

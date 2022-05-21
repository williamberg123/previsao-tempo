import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ children }) {
    return (
        <select id="select-of-states">
            {children}
        </select>
    );
}

Select.propTypes = {
    children: PropTypes.node.isRequired,
};

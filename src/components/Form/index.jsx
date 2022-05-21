import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ children, func }) {
    return (
        <form onSubmit={func}>
            {children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    func: PropTypes.func.isRequired,
};

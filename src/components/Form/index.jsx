import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Form({ children, func, elementClass }) {
    return (
        <form className={elementClass} onSubmit={func}>
            {children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    func: PropTypes.func.isRequired,
    elementClass: PropTypes.string,
};

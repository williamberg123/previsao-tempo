import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Header({ children }) {
    return (
        <header className="Header">
            {children}
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

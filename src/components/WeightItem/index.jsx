import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function WeightItem({ children, heading, paragraph }) {
    return (
        <div className="WeightItem">
            <h3>
                {heading}
                {children}
            </h3>
            <p>{paragraph}</p>
        </div>
    );
}

WeightItem.propTypes = {
    children: PropTypes.node,
    heading: PropTypes.string,
    paragraph: PropTypes.string,
};

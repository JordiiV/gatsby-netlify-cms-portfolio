import React from 'react';
import PropTypes from 'prop-types';

import './switch.component.scss';

const Switch = ({ onClick, checked }) => (
    <div id="switch-component">
        <label className="switch">
            <input
                type="checkbox"
                className="checkbox"
                onClick={onClick}
                checked={checked}
            />
            <span className="slider round" />
        </label>
    </div>
);

Switch.propTypes = {
    onClick: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired
}

export default Switch;

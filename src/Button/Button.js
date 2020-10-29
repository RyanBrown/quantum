import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset', null]),
    variant: PropTypes.string,
};

const defaultProps = {
    active: false,
    disabled: false,
    type: 'button',
    variant: 'secondary',
};

const Button = (props) => (
    <button
        className={classNames(styles.btn, styles[`btn-${props.variant}`], {
            [styles.active]: props.active,
        })}
        disabled={props.disabled}
        id={props.id}
        type={props.type}
        // onClick={props.onClick}
    >
        {props.children}
    </button>
);

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset', null]),
    onClick: PropTypes.func,
};

const defaultProps = {
    type: 'button',
};

const CloseButton = React.forwardRef(({ label, onClick, className, ...props }, ref) => (
    <button
        id={props.id}
        ref={ref}
        type={props.type}
        styleName={classNames('close', className && styles[className])}
        onClick={onClick}
        {...props}
    >
        <span aria-hidden='true'>&times;</span>
        <span className={styles['sr-only']}>{label}</span>
    </button>
));

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;

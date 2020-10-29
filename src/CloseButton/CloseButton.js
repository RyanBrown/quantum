import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line
import styles from './styles.scss';

const propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

const defaultProps = {
    label: 'Close',
};

const CloseButton = React.forwardRef(({ label, onClick, className, ...props }, ref) => (
    <button
        id={props.id}
        ref={ref}
        type='button'
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

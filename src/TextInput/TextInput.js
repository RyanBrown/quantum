import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line
import styles from './styles.scss';

const propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'email', null]),
    onClick: PropTypes.func,
};

const defaultProps = {
    label: 'Close',
    type: 'text',
};

const TextInput = React.forwardRef(({ label, onClick, className, ...props }, ref) => (
    <input
        id={props.id}
        ref={ref}
        type={props.type}
        styleName={classNames('close', className && styles[className])}
        placeholder={props.placeholder}
        onClick={onClick}
        {...props}
    />
));

TextInput.displayName = 'TextInput';
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;

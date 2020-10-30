import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    nested: PropTypes.bool,
    onClick: PropTypes.func,
    truncate: PropTypes.bool,
    underline: PropTypes.bool,
};

const defaultProps = {
    active: false,
    disabled: false,
    truncate: true,
    underline: false,
};

/** DropDown list Item  */
class DropDownItem extends React.Component {
    render() {
        return (
            <li
                {...this.props}
                className={classNames(
                    styles['dropdown-list-item'],
                    this.props.active && styles.active,
                    this.props.className,
                    this.props.disabled && styles.disabled,
                    this.props.nested && styles.nested,
                    this.props.underline && styles.underline
                )}
                id={this.props.id}
            >
                <div
                    className={classNames(this.props.truncate && styles.truncate)}
                    onClick={this.props.onClick}
                    onKeyPress={this.props.onClick}
                >
                    {this.props.children}
                </div>
            </li>
        );
    }
}

DropDownItem.propTypes = propTypes;
DropDownItem.defaultProps = defaultProps;
DropDownItem.displayName = 'DropDownItem';

export default DropDownItem;

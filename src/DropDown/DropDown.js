import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import DropDownItem from './DropDownItem';
import styles from './styles.scss';

const propTypes = {
    block: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    className: PropTypes.string,
    fullwidth: PropTypes.bool,
    height: PropTypes.number,
    id: PropTypes.string,
    label: PropTypes.string,
    placement: PropTypes.oneOf(['left', 'right']),
};

const defaultProps = {
    className: '',
    fullwidth: false,
    height: '',
    label: 'Dropdown Menu',
    placement: 'left',
};

/** DropDown */
class DropDown extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
            active: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true, active: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        this.setState({ active: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
        setTimeout(() => {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }, 200); //  Mirror the animation speed in mixins/_fadeInOut.scss
    }

    render() {
        return (
            // <div className={classNames(styles.dropdown, styles.fullwidth, this.props.className)}>
            <div className='dropdown'>
                <div
                    className={classNames(
                        styles['dropdown-trigger'],
                        this.props.block && styles.block,
                        this.props.fullwidth && styles.fullwidth,
                        this.state.active && styles.active
                    )}
                    id={this.props.id}
                    onClick={this.showMenu}
                    onKeyPress={this.showMenu}
                >
                    {this.props.label}
                </div>

                {this.state.showMenu && (
                    <div
                        className={classNames(styles['dropdown-menu'], this.state.active && styles.fadeIn)}
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                    >
                        <ul
                            className={classNames(
                                styles['dropdown-list'],
                                this.props.placement && styles[this.props.placement]
                            )}
                            style={{
                                height: `${this.props.height}px`,
                            }}
                        >
                            {this.props.children}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

DropDown.defaultProps = defaultProps;
DropDown.displayName = 'DropDown';
DropDown.propTypes = propTypes;

DropDown.Item = DropDownItem;

export default DropDown;

// User Email
// Screen Width
// Screen Height
// # of Visits
// First
// Name
// Last Name
// Page Response time (ms)
// Domain
// Page Path

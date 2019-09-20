import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actionsLogin from '../../store/actions/auth/actions';
import MainConstants from '../../constants/mainConstants';
import MainUtils from '../../utils/mainUtils';

const Header = props => {
    const {username} = props;

    const handleOut = () => {
        actionsLogin.signOut();
    };

    const headerLinks = () => {
        if(props.authenticate) {
            return [
                <div className="header__nav__item">
                    <ul className="header__nav__item-list">
                        <li className="header__list">
                            <Link className="header__link" to="/profile">{username}</Link>
                        </li>
                        <li className="header__list">
                            <Link className="header__link" to="/" onClick={handleOut}>Logout</Link>
                        </li>
                    </ul>
                </div>
            ]
        }
        return [
            <div className="header__container__nav__item">
                <Link className="header__link" to="/login">Login</Link>
            </div>
        ]
    };

    return(
        <div className="header">
            <div className="header__logo">
                JS
            </div>
            <div className="header__nav">
                {MainConstants.menu.map((item, index) =>
                    <div className="header__nav__item" key={MainUtils.generateKey(`header_item_${index}`)}>
                        <Link className="header__link" to={item.link}>{MainConstants.titles[item.id]}</Link>
                   </div>
                )}
                {headerLinks()}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        authenticate: state.user.authenticate,
        username: state.user.login,
    }
};

export default connect(mapStateToProps)(Header)
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actionsLogin from "../../store/auth/actions";
import MainConstants from "../../constants/mainConstants";
import MainUtils from "../../utils/mainUtils";
import './Header.scss'

const Header = props => {
    const {username} = props;

    const handleOut = () => {
        actionsLogin.signOut();
    };

    const headerLinks = () => {
        if(props.authenticate) {
            return [
                <div className="header__container__nav--item">
                    <ul className="header__container__nav--item-list">
                        <li>
                            <Link to="/profile">{username}</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={handleOut}>Logout</Link>
                        </li>
                    </ul>
                </div>
            ]
        }
        return [
            <div className="header__container__nav--item">
                <Link to="/login">Login</Link>
            </div>
        ]
    };

    return(
        <div className="header">
            <div className="header__container">
                <div className="header__container--logo">
                    JS
                </div>
                <div className="header__container__nav">
                    {MainConstants.menu.map((item, index) =>
                        <div className="header__container__nav--item" key={MainUtils.generateKey(`header_item_${index}`)}>
                            <Link to={item.link}>{MainConstants.titles[item.id]}</Link>
                       </div>
                    )}
                    {headerLinks()}
                </div>
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
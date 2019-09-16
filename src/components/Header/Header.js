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
                <li className="auth">
                    <span>{username}</span>
                </li>,
                <li className="auth">
                    <Link to="/profile">Профиль</Link>
                </li>,
                <li className="auth">
                    <Link to="/" onClick={handleOut}>Выйти</Link>
                </li>
            ]
        }
        return [
            <li className="auth">
                <Link to="/login">Авторизация</Link>
            </li>
        ]
    };

    return(
        <header>
                <div>
                    <nav>
                        <ul>
                            {MainConstants.menu.map((item, index) =>
                                <li key={MainUtils.generateKey(`header_item_${index}`)}>
                                    <Link to={item.link}>{MainConstants.titles[item.id]}</Link>
                                </li>
                            )}
                            {headerLinks()}
                        </ul>
                    </nav>
                </div>
        </header>
    )
};

const mapStateToProps = state => {
    return {
        authenticate: state.user.authenticate,
        username: state.user.login,
    }
};

export default connect(mapStateToProps)(Header)
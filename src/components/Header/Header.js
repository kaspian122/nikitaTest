import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actionsLogin from "../../store/auth/actions";
import MainConstants from "../../constants/mainConstants";
import './Header.scss'

const Header = props => {
    const handleOut = () => {
        actionsLogin.signOut();
    };

    const headerLinks = () => {
        if(props.authenticate) {
            return [
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
                            {MainConstants.menu.map((item, key) =>
                                <li key={key}>
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
        authenticate: state.user.authenticate
    }
};

export default connect(mapStateToProps)(Header)
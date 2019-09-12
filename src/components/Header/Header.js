import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News";
import Request from "../Request/Request";
import Profile from "../../pages/Profile/Profile";
import { connect } from "react-redux";
import { signOut } from "../../store/auth/actions";
import './Header.scss'

const Header = props => {
    const out = () => {
        props.signOut();
    };

    const headerLinks = () => {
        if(props.authenticate) {
            return [
                <li className="auth">
                    <Link to="/profile">Профиль</Link>
                </li>,
                <li className="auth">
                    <Link to="/" onClick={out}>Выйти</Link>
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
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">На главную</Link>
                        </li>
                        <li>
                            <Link to="/news">Новости</Link>
                        </li>
                        {headerLinks()}
                    </ul>
                </nav>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" component={Login}/>
                <Route path="/news" component={News}/>
                <Route path="/request" component={Request}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </Router>
    )
};

const mapStateToProps = state => {
    return {
        authenticate: state.user.authenticate
    }
};

export default connect(mapStateToProps, {signOut})(Header)
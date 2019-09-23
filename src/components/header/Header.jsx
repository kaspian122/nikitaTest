import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actionsLogin from '../../store/actions/auth/actions';
import MainConstants from '../../constants/MainConstants';
import MainUtils from '../../utils/mainUtils';

const Header = props => {
    const {username} = props;

    const handleOut = () => {
        actionsLogin.signOut();
    };

    const headerLinks = () => {
        if(props.authenticate) {
            return (
                <React.Fragment>
                    <Link to="/profile" className="header__link">{username}</Link>
                    <Link to="/" className="header__link" onClick={handleOut}>Logout</Link>
                </React.Fragment>
            )
        }
        return (
            <Link className="header__link" to="/login">Login</Link>
        )
    };

    return(
        <div className="header">
            <div className="header__logo">
                JS
            </div>
            <div className="header__nav">
                {MainConstants.menu.map((item, index) =>
                    <Link key={MainUtils.generateKey(`header_item_${index}`)} className="header__link" to={item.link}>{MainConstants.titles[item.id]}</Link>
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
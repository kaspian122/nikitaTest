import './style.scss';
import React from 'react';
import { connect } from 'react-redux';
import Request from '../../components/request';

const Profile = props => {
    const {login} = props;

    return(
        <div className="profile">
            <div className="profile__content">
                <h1 className="profile__title">
                    Добро пожаловать
                    {' '}
                    <span className="profile__title__username">{login}</span>
                </h1>
                <h3 className="profile__title">Заполните форму первичных данных</h3>
            </div>
            <Request/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        login: state.user.login,
    }
};

export default connect(mapStateToProps)(Profile);
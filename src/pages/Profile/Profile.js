import React from 'react';
import Request from "../../components/Request/Request";
import { connect } from "react-redux";
import './Profile.scss';

const Profile = props => {
    const {login} = props;

    return(
        <div>
            <div className="profile__title">
                <h1 className="hello-user">
                    Добро пожаловать
                    {' '}
                    <span className="hello-user__username">{login}</span>
                </h1>
                <div className="user-data">
                    <div className="user-data__form">
                        <h3 className="user-data__form__title">Заполните форму первичных данных</h3>
                    </div>
                </div>
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
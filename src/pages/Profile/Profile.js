import React, { Component } from 'react';
import Request from "../../components/Request/Request";
import './Profile.scss';

class Profile extends Component{
    state = {
        username: localStorage.getItem('user'),
    };

    render() {
        const { username } = this.state;
        return(
            <div>
                <h1 className="hello-user">
                    Добро пожаловать
                    {' '}
                    <span className="hello-user__username">{username}</span>
                </h1>
                <div className="user-data">
                    <div className="user-data__form">
                        <h3 className="user-data__form__title">Заполните форму первичных данных</h3>
                        <Request/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Profile;
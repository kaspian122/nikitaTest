import React, { Component } from 'react';
import Request from "../../components/Request/Request";
import './Profile.scss';

export default class Profile extends Component{
    state = {
        username: localStorage.getItem('user'),
        data: localStorage.getItem('data')
    };

    render() {
        const { username, data } = this.state;
        return(
            <div>
                <h1 className="hello-user">
                    Добро пожаловать
                    {' '}
                    <span className="hello-user__username">{username}</span>
                </h1>
                <div className="user-data">
                    {data ?
                        <div className="test">
                            {data}
                        </div>
                        :(
                            <div className="user-data__form">
                                <h3 className="user-data__form__title">Заполните форму первичных данных</h3>
                                <Request/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
};
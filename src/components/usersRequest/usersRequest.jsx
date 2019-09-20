import './usersRequest.scss';
import React from 'react';

const UsersRequest = props => {
    const {post} = props;

    const title = (nameTitle, textTitle) => {
        return(
            <span>
                <strong>{nameTitle}:</strong>
                &nbsp;
                {textTitle}
            </span>
        )
    };

    return(
        <div className="user-request">
            <label className="user-request__label">
                <input type="checkbox" className="user-request__checkbox"/>
                <div className="user-request__card">
                    <div className="user-request__card__front">
                        {title('Название', post.title)}
                        {title('Логин', post.username)}
                        {title('Имя', post.name)}
                        {title('Фамилия', post.surname)}
                        {title('Почта', post.email)}
                        {title('Пол', post.sex)}
                    </div>
                    <div className="user-request__card__back">
                        {title('Текст', post.request)}
                    </div>
                </div>
            </label>
        </div>
    )
};

export default UsersRequest;
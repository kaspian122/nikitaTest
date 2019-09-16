import React from 'react';
import './UsersRequest.scss'

const UsersRequest = props => {
    const {post} = props;

    const title = (nameTitle, textTitle) => {
        return(
            <span>
                <strong>{nameTitle}:</strong>
                {' '}
                {textTitle}
            </span>
        )
    }

    return(
        <div className="user-request__container">
            <label>
                <input type="checkbox"/>
                <div className="card">
                    <div className="front">
                        {title('Название', post.title)}
                        {title('Логин', post.username)}
                        {title('Имя', post.name)}
                        {title('Фамилия', post.surname)}
                        {title('Почта', post.email)}
                        {title('Пол', post.sex)}
                    </div>
                    <div className="back">
                        {title('Текст', post.request)}
                    </div>
                </div>
            </label>
        </div>
    )
    // return(
    //     <div className="user-request__container">
    //         <div className="users-request__username">
    //             <span>
    //                 <strong>Имя пользователя</strong>
    //                 {post.username}
    //             </span>
    //         </div>
    //         <div className="user-request__title">
    //             <span>
    //                 <strong>Заголовок</strong>
    //                 {post.title}
    //             </span>
    //         </div>
    //         <div className="user-request__request">
    //             <span><strong>Заявка</strong> <p>{post.request}</p></span>
    //         </div>
    //     </div>
    // )
};

export default UsersRequest;
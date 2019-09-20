import React from 'react';
import { Link } from "react-router-dom";
import './404 Not Found.scss'

const NotFound = () => {
    const href = window.location.href;
    return(
        <div className="not-found__container">
            <h1>404 NOT FOUND :(</h1>
            <p>{href} не найдена</p>
            <h2>
                Вернуться на главную {' '}
                <Link to="/">тык</Link>
            </h2>
        </div>
    )
};

export default NotFound;
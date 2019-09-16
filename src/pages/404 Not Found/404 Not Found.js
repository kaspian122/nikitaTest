import React from 'react';
import './404 Not Found.scss'

const NotFound = () => {
    const href = window.location.href;
    return(
        <div className="not-found__container">
            <h1>404 NOT FOUND :(</h1>
            <p>{href} не найдена</p>
        </div>
    )
};

export default NotFound;
import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const href = window.location.href;
    return(
        <div className="not-found">
            <h1 className="not-found__title">404 NOT FOUND :(</h1>
            <p className="not-found__text">{href} не найдена</p>
            <h2 className="not-found__title--size">
                Вернуться на главную {' '}
                <Link className="not-found__link" to="/">тык</Link>
            </h2>
        </div>
    )
};

export default NotFound;
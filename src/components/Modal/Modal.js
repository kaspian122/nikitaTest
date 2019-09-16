import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modal">
            <button className="modal__close-button" onClick={props.onClose}>Закрыть</button>
            <div className="modal__window">
                <ul>
                    <li>Представте</li>
                    <li>Что</li>
                    <li>Тут</li>
                    <li>Подсказки</li>
                    <li>Для</li>
                    <li>Новых</li>
                    <li>Пользователей</li>
                </ul>
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;
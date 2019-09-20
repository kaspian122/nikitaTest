import './modal.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    const { onClose } = props;

    return ReactDOM.createPortal(
        <div className="modal">
            <button className="modal__close-button" onClick={onClose}>Закрыть</button>
            <div className="modal__window">
                <ul className="modal__window__list">
                    <li className="modal__window__list__item">Представте</li>
                    <li className="modal__window__list__item">Что</li>
                    <li className="modal__window__list__item">Тут</li>
                    <li className="modal__window__list__item">Подсказки</li>
                    <li className="modal__window__list__item">Для</li>
                    <li className="modal__window__list__item">Новых</li>
                    <li className="modal__window__list__item">Пользователей</li>
                </ul>
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;
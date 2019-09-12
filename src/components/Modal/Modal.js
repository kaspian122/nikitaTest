import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modal">
            <button className="modal__close-button" onClick={props.onClose}>Закрыть</button>
            <div className="modal__window">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default Modal;
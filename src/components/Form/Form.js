import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaQuestionCircle } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { connect } from 'react-redux';
import actionsLogin from '../../store/auth/actions';
import './Form.scss'

const Form = props => {
    const [isOpen, isOpenSet] = useState(false);
    const { handleSubmit, login } = props;

    const errorMessage = () => {
        if(errorMessage) {
            return(
                <div>
                    {errorMessage}
                </div>
            )
        }
    };

    const submit = values => {
        actionsLogin.signIn(values);
    };

    const toggleModal = () => {
        isOpenSet(!isOpen);
    };

    return (
        <div className="formPanel">
            <div className="formPanel__left">
                <div className="formPanel__left__title">{login}</div>
                <div className="formPanel__left__text">Добро пожаловать</div>
            </div>
            <div className="formPanel__right">
            <span className="formPanel__right__modal">
                <main>
                    {isOpen &&
                        <Modal onClose={toggleModal}>
                            <h1>Справка</h1>
                        </Modal>
                    }
                </main>
                <span onClick={toggleModal}>
                    <FaQuestionCircle/>
                </span>
            </span>
                <form onSubmit={handleSubmit(submit)} className="formPanel__right__form">
                    <div>
                        <label htmlFor="login">Логин</label>
                        <Field className="formPanel__right__input" name="login" component="input" type="text"/>
                        {errorMessage()}
                    </div>
                    <button className="formPanel__right__button" value="Войти" type="submit">Войти</button>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        errorMessage: state.user.error
    }
};

const form = reduxForm({
    form: 'login',
    destroyOnUnmount: false,
})(Form);

export default connect(mapStateToProps)(form)




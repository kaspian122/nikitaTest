import './style.scss';
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FaQuestionCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import Modal from '../modal';
import actionsLogin from '../../store/actions/auth/actions';


const FormAuth = props => {
    const [isOpen, isOpenSet] = useState(false);
    const { handleSubmit, login } = props;

    const errorMessage = () => {
        if(props.errorMessage) {
            return(
                <div className="error">
                    {props.errorMessage}
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
        <div className="form-auth">
            <div className="form-auth__left">
                <div className="form-auth__title">{login}</div>
                <div className="form-auth__text">Добро пожаловать</div>
            </div>
            <div className="form-auth__right">
            <span className="form-auth__right__modal">
                <main>
                    {isOpen &&
                        <Modal onClose={toggleModal}>
                            <h1>Справка</h1>
                        </Modal>
                    }
                </main>
                <span onClick={toggleModal} className="form-auth__right__icon">
                    <FaQuestionCircle/>
                </span>
            </span>
                <form onSubmit={handleSubmit(submit)} className="form-auth__right__form">
                    <div>
                        <label className="form-auth__label">Логин</label>
                        <Field className="form-auth__input" name="login" component="input" type="text"/>
                        {errorMessage()}
                    </div>
                    <button className="form-auth__button" value="Войти" type="submit">Войти</button>
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
})(FormAuth);

export default connect(mapStateToProps)(form)




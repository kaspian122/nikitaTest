import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from "redux";
import { FaQuestionCircle } from "react-icons/fa";
import { Modal } from "../Modal/Modal";
import { connect } from 'react-redux';
import { signIn } from '../../store/auth/actions';
import './Form.scss'

export default class Form extends Component {
    state = {
        isOpen: false,
        login: '',
    };

    errorMessage = () => {
        if(this.props.errorMessage) {
            return(
                <div>
                    {this.props.errorMessage}
                </div>
            )
        }
    };

    submit = values => {
        this.props.signIn(values, this.props.history);
    };

    toggleModal = () => {
        this.setState(state => ({isOpen: !state.isOpen}));
    };

    render() {
        const {handleSubmit, login} = this.props;
        return (
            <div className="formPanel">
                <div className="formPanel__left">
                    <div className="formPanel__left__title">{login}</div>
                    <div className="formPanel__left__text">Добро пожаловать</div>
                </div>
                <div className="formPanel__right">
                <span className="formPanel__right__modal">
                    <main>
                        {this.state.isOpen &&
                            <Modal onClose={this.toggleModal}>
                                <h1>Справка</h1>
                            </Modal>
                        }
                    </main>
                    <span onClick={this.toggleModal}>
                        <FaQuestionCircle/>
                    </span>
                </span>
                    <form onSubmit={handleSubmit(this.submit)} className="formPanel__right__form">
                        <div>
                            <label htmlFor="login">Логин</label>
                            <Field className="formPanel__right__input" name="login" component="input" type="text"/>
                            {this.errorMessage()}
                        </div>
                        <button className="formPanel__right__button" value="Войти" type="submit">Войти</button>
                    </form>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        errorMessage: state.user.error
    }
};

Form = compose(
    connect(mapStateToProps, {signIn}),
    reduxForm({
        form: 'login',
        destroyOnUnmount: false
    })
)(Form);




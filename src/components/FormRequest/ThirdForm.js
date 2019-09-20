import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from "../ErrorForm/ErrorForm";
import validate from "../../validate/validate";
import actionsData from '../../store/user-data/actions'
import {connect} from "react-redux";

const ThirdForm = props => {
    const [animationClass, animationClassSet] = useState('');
    const { handleSubmit, prevPage, submitting, pristine } = props;

    useEffect(() => {
        setTimeout(() => {
            animationClassSet('animated');
        }, 0)
    }, []);

    const submit = values => {
        actionsData.setData(values, props.username);
    };

    return (
        <div className={`formRequest__container ${animationClass}`}>
            <form className="formRequest" onSubmit={handleSubmit(submit)}>
                <div className="formRequest__title">
                    <label htmlFor="">Имя</label>
                    <Field name="name" type="text" component={renderField}/>
                </div>
                <div className="formRequest__title">
                    <label className="formLabel">Фамилия</label>
                    <Field name="surname" type="text" component={renderField}/>
                </div>
                <div className="formRequest__group-button">
                    <button className={`formRequest__button`} type="button" onClick={prevPage}>Назад</button>
                    <button className={`formRequest__button`} disabled={ pristine || submitting } type="submit">
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        username: state.user.login
    }
};

const form = reduxForm({
        form: 'request',
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        validate,
    })(ThirdForm);

export default connect(mapStateToProps)(form)
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import renderField from "../errorLabel/ErrorLabel";
import validate from "../../validate/validate";
import actionsData from '../../store/actions/user-data/actions'

export const ThirdForm = props => {
    const { handleSubmit, prevPage, submitting, pristine } = props;

    const submit = values => {
        actionsData.setData(values, props.username);
    };

    return (
        <div className="form-request">
            <form className="form-request__form" onSubmit={handleSubmit(submit)}>
                <div className="form-request__title">
                    <label className="form-request__label">Имя</label>
                    <Field name="name" type="text" component={renderField}/>
                </div>
                <div className="form-request__title">
                    <label className="form-request__label">Фамилия</label>
                    <Field name="surname" type="text" component={renderField}/>
                </div>
                <div className="form-request__group-button">
                    <button className="form-request__button" type="button" onClick={prevPage}>Назад</button>
                    <button className="form-request__button" disabled={ pristine || submitting } type="submit">
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
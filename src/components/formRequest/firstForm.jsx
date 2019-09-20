import './formRequest.scss';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import validate from "../../validate/validate";
import renderField from "../errorLabel";

export const FirstForm = props => {
    const {handleSubmit} = props;

    return(
        <div className="form-request">
            <form onSubmit={handleSubmit} className="form-request__form">
                <div className="form-request__title">
                    <label className="form-request__label">Заголовок</label>
                    <Field
                        className="form-request__input"
                        placeholder="Заголовок"
                        name="title"
                        component={renderField}
                        type="text"
                    />
                </div>
                <div className="form-request__request">
                    <label className="form-request__label">Ваша заявка</label>
                    <Field
                        placeholder="Заполнение заявки"
                        name="request"
                        component="textarea"
                        className="form-request__textarea"
                    />
                </div>
                <button
                    className="form-request__button"
                    type="submit"
                >
                    Дальше
                </button>
            </form>
        </div>
    )
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
})(FirstForm);

export default connect(mapStateToProps)(form)
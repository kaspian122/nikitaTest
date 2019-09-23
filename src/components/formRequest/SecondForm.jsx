import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import renderField from "../errorLabel/ErrorLabel";
import validate from "../../validate/validate";

export const SecondForm = props => {
    const {handleSubmit, prevPage} = props;

    return (
        <div className="form-request">
            <form className="form-request__form" onSubmit={handleSubmit}>
                <div className="form-request__title">
                    <label className="form-request__label">Email</label>
                    <Field name="email" type="emil" component={renderField}/>
                </div>
                <div className="form-request__content">
                    <label className="form-request__label--center">Ваш пол</label>
                    <div className="form-request__gender">
                        <label className="form-request__gender__label">
                            <Field name="sex" component="input" type="radio" value="Девушка"/>
                            &nbsp;
                            Девушка
                        </label>
                        <label className="form-request__gender__label">
                            <Field name="sex" component="input" type="radio" value="Мужчина"/>
                            &nbsp;
                            Мужчина
                        </label>
                    </div>
                </div>
                <div className="form-request__group-button">
                    <button className="form-request__button" type="button" onClick={prevPage}>Назад</button>
                    <button className="form-request__button" type="submit"> Дальше </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const form = reduxForm({
    form: 'request',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(SecondForm);

export default connect(mapStateToProps)(form)
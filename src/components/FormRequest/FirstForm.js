import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from "../../validate/validate";
import renderField from "../ErrorForm/ErrorForm";
import { connect } from "react-redux";
import './FormRequest.scss';

const FirstForm = props => {
    const [animationClass, animationClassSet] = useState('');
    const {handleSubmit} = props;

    useEffect(() => {
        setTimeout(() => {
            animationClassSet('animated');
        }, 0)
    }, []);

    return(
        <div className={`formRequest__container ${animationClass}`}>
            <form onSubmit={handleSubmit} className="formRequest">
                <div className="formRequest__title">
                    <Field
                        placeholder="Заголовок"
                        name="title"
                        component={renderField}
                        type="text"
                        label="Заголовок"
                    />
                </div>
                <div className="formRequest__request">
                    <label>Ваша заявка</label>
                    <Field
                        placeholder="Заполнение заявки"
                        name="request"
                        component="textarea"
                    />
                </div>
                <button
                    className={`formRequest__button`}
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
        data: state.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setData: () => dispatch({type: 'ADD_DATA', payload: this.props.data})
    }
};

const form = reduxForm({
    form: 'request',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(FirstForm);

export default connect(mapStateToProps, mapDispatchToProps())(form)
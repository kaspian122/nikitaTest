import React, { useEffect, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from "../ErrorForm/ErrorForm";
import validate from "../../validate/validate";
import { connect } from "react-redux";

const SecondForm = props => {
    const [animationClass, animationClassSet] = useState('');
    const {handleSubmit, prevPage} = props;

    useEffect(() => {
        setTimeout(() => {
            animationClassSet('animated');
        }, 0)
    }, []);

    return (
        <div className={`formRequest__container ${animationClass}`}>
            <form className="formRequest" onSubmit={handleSubmit}>
                <div className="formRequest__title">
                    <label htmlFor="">Email</label>
                    <Field name="email" type="emil" component={renderField}/>
                </div>
                <div className="formRequest__content__secondForm">
                    <label className="formLabel">Ваш пол</label>
                    <div className="formRequest__gender">
                        <label className="formRequest__gender__label">
                            <Field name="sex" component="input" type="radio" value="Девушка"/>{' '}
                            Девушка
                        </label>
                        <label className="formRequest__gender__label">
                            <Field name="sex" component="input" type="radio" value="Мужчина"/>{' '}
                            Мужчина
                        </label>
                    </div>
                </div>
                <button className={`formRequest__button`} type="submit"> Дальше </button>
                <button className={`formRequest__button`} type="button" onClick={prevPage}>Назад</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
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
})(SecondForm);

export default connect(mapStateToProps, mapDispatchToProps)(form)
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from "../ErrorForm/ErrorForm";
import validate from "../../validate/validate";
import { compose } from "redux";
import { connect } from "react-redux";
import { addData } from '../../store/user-data/actions';

export default class SecondForm extends Component{
    state = {
        animationClass: '',
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            animationClass: 'animated'
        }), 0)
    }

    render() {
        const { handleSubmit, prevPage } = this.props;
        return (
            <div className={`formRequest__container ${this.state.animationClass}`}>
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
    }
};

const mapStateToProps = state => {
    return state.data
};

SecondForm = compose(
    connect(mapStateToProps, {addData}),
    reduxForm({
        form: 'request',
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        validate
    })
)(SecondForm);
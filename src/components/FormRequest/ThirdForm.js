import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from "../ErrorForm/ErrorForm";
import validate from "../../validate/validate";
import {setData} from '../../store/user-data/actions'
import {connect} from "react-redux";

class ThirdForm extends Component {
    state = {
        animationClass: '',
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            animationClass: 'animated'
        }), 0)
    }

    submit = values => {
        this.props.setData(values, this.props.username);
    };

    render() {
        const { handleSubmit, prevPage, submitting, pristine } = this.props;
        return (
            <div className={`formRequest__container ${this.state.animationClass}`}>
                <form className="formRequest" onSubmit={handleSubmit(this.submit)}>
                    <div className="formRequest__title">
                        <label htmlFor="">Имя</label>
                        <Field name="name" type="text" component={renderField}/>
                    </div>
                    <div className="formRequest__title">
                        <label className="formLabel">Фамилия</label>
                        <Field name="surname" type="text" component={renderField}/>
                    </div>
                    <button className={`formRequest__button`} disabled={ pristine || submitting } type="submit">
                        Отправить
                    </button>
                    <button className={`formRequest__button`} type="button" onClick={prevPage}>Назад</button>
                </form>
            </div>
        );
    }
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

export default connect(mapStateToProps, { setData })(form)
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from "../../validate/validate";
import renderField from "../ErrorForm/ErrorForm";
import { connect } from "react-redux";
import { setData } from '../../store/user-data/actions';
import './FormRequest.scss';

class FirstForm extends Component{
    state = {
        animationClass: '',
    };

    componentDidMount() {
        setTimeout(() => this.setState({
            animationClass: 'animated'
        }), 0)
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div className={`formRequest__container ${this.state.animationClass}`}>
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
    }
};

const mapStateToProps = (state) => {
    return state.data
};

const form = reduxForm({
    form: 'request',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(FirstForm);

export default connect(mapStateToProps, { setData })(form)
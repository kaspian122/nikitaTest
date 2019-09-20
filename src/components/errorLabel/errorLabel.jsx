import './errorLabel.scss';
import React from 'react';

const renderField = props => {
    const { input, label, type, meta: { touched, error } } = props;
    return (
        <div className="errorLabel">
            <label className="errorLabel__label">
                {label}
            </label>
            <div className="errorLabel__label__error">
                <input className="errorLabel__input" {...input} placeholder={label} type={type}/>
                {touched && error && <span className="errorLabel__error"> {error} </span>}
            </div>
        </div>
    );
};

export default renderField;
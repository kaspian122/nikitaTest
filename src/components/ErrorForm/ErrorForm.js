import React from 'react';
import './ErrorForm.scss';

const renderField = (props) => {
    const { input, label, type, meta: { touched, error } } = props;
    return (
        <div>
            <label>
                {label}
            </label>
            <div>
                <input {...input} placeholder={label} type={type}/>
                {touched && error && <span className="error"> {error} </span>}
            </div>
        </div>
    );
};

export default renderField;
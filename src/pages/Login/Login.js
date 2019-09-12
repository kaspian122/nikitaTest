import React from 'react';
import Form  from '../../components/Form/Form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Login = props => {
    if (!props.authenticate) {
        return (
            <Form login="Login"/>
        )
    } else {
        return (<Redirect to="/profile"/>)
    }
};

const mapStateToProps = state => {
    return{
        authenticate: state.user.authenticate,
    }
};

export default connect(mapStateToProps,)(Login);
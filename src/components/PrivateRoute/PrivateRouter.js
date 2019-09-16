import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, login, ...rest }) => (
        <Route {...rest} render={() => (
            login === 'leronim'
            ? <Component/>
            : <Redirect to="/login"/>
        )}/>
);

const mapStateToProps = state => {
    return {
        login: state.user.login,
    }
};

export default connect(mapStateToProps)(PrivateRoute);
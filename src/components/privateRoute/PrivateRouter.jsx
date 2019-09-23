import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PageWrapper from "../pageWrapper";

const PrivateRoute = props => {
    const {component: Component, path, login, renderHead, ...rest} = props;
    return(
        <Route {...rest} render={() => {
            if(login === 'leronim' && path === '/admin') {
                return <PageWrapper renderHead={renderHead}> <Component/> </PageWrapper>
            } else if(login){
                return <PageWrapper renderHead={renderHead}> <Component/>} </PageWrapper>
            } else {
                return <Redirect to="/login"/>
            }
        }}/>
    )
};

const mapStateToProps = state => {
    return {
        login: state.user.login,
    }
};

export default connect(mapStateToProps)(PrivateRoute);
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageWrapper from "../PageWrapper/PageWrapper";
import { connect } from 'react-redux';

const PrivateRoute = props => {
    const {children, path, login, renderHead, ...rest} = props;
    return(
        <Route {...rest} render={() => {
            if(login === 'leronim' && path === '/admin') {
                return <PageWrapper renderHead={renderHead}> {children} </PageWrapper>
            } else if(login){
                return <PageWrapper renderHead={renderHead}> {children} </PageWrapper>
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
import React from 'react';
import Header from "../Header/Header";

const PageWrapper = props => {
    const {renderHead, children} = props;
    return(
        <>
            {renderHead && <Header/>}
            {children}
        </>
    )
};

export default PageWrapper;
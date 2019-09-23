import React from 'react';
import Header from "../header";

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
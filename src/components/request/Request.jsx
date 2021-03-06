import React, { useState } from 'react';
import FirstForm from '../formRequest/FirstForm';
import SecondForm from '../formRequest/SecondForm';
import ThirdForm from '../formRequest/ThirdForm';

const Request = props => {
    const [page, pageSet] = useState(1);
    const { onSubmit } = props;

    const nextPage = () => {
        pageSet(page + 1);
    };

    const prevPage = () => {
        pageSet(page - 1);
    };

    return(
        <div className="request">
            {page === 1 && <FirstForm onSubmit={nextPage}/>}
            {page === 2 && <SecondForm prevPage={prevPage} onSubmit={nextPage}/>}
            {page === 3 && <ThirdForm prevPage={prevPage} onSubmit={onSubmit}/>}
        </div>
    )
};

export default Request;
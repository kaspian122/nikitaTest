import React, { useState, useEffect } from 'react';
import Api from "../../utils/api";
import UsersRequest from "../../components/UsersRequest/UsersRequest";
import MainUtils from "../../utils/mainUtils";
import Spinner from "../../components/Spinner/Spinner";
import './Admin.scss';

const Admin = () => {
    const [posts, postsSet] = useState([]);
    const [loading, loadingSet] = useState(true);

    useEffect(() => {
        Api.getDataUser()
            .then(response => {
                postsSet(response.data);
                loadingSet(false)
            })
    }, []);

    return(
        <>
            {loading ? (<Spinner/>)
            :(
                <div className="admin__container">
                    {Object.values(posts).map((post, index) => (
                        <div key={MainUtils.generateKey(`_users_post_${index}`)}>
                            <UsersRequest post={post}/>
                        </div>
                    ))}
                </div>
                )}
        </>
    )
};

export default Admin;
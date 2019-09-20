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
        <div className="admin">
            {loading ? (<Spinner/>)
            :(
                <>
                    <div className="admin__title">
                        <h1>Заявки пользователей</h1>
                    </div>
                    <div className="admin__content">
                        {Object.values(posts).map((post, index) => (
                            <div key={MainUtils.generateKey(`_users_post_${index}`)}>
                                <UsersRequest post={post}/>
                            </div>
                        ))}
                    </div>
                </>
                )}
        </div>
    )
};

export default Admin;
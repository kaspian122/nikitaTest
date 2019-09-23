import './style.scss';
import React, { useState, useEffect } from 'react';
import UsersRequest from '../../components/usersRequest';
import Spinner from '../../components/spinner/Spinner';
import Api from '../../utils/api';
import MainUtils from '../../utils/mainUtils';

const Admin = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Api.getDataUser()
            .then(response => {
                setPosts(response.data);
                setLoading(false)
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
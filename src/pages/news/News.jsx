import './style.scss';
import React, { useEffect, useState } from 'react';
import Post from '../../components/post';
import Spinner from '../../components/spinner';
import axios from 'axios';

const News = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(response => {
                setPosts(response.data);
                setLoading(false)
            })
    };



    useEffect(() => {
        getPosts();
    },[]);

    return(
        <div className="news">
            {loading ? (<Spinner/>)
            :(
                <React.Fragment>
                    <div className="news__title">
                        <h1>Последние новости</h1>
                    </div>
                    <div className="news__posts">
                        {posts.map(post => (
                            <>
                                <div className="news__posts__to-request" key={post.id}>
                                    <Post post={post}/>
                                </div>
                            </>
                        ))}
                    </div>
                </React.Fragment>
                )
            }
        </div>
    )
};

export default News;
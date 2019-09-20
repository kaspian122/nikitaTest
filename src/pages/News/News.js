import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';
import Spinner from "../../components/Spinner/Spinner";
import './News.scss';

const News = () => {
    const [posts, postsSet] = useState([]);
    const [loading, loadingSet] = useState(true);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
            .then(response => {
                postsSet(response.data);
                loadingSet(false)
            })
    };



    useEffect(() => {
        getPosts();
    },[]);

    return(
        <div className="news">
            {loading ? (<Spinner/>)
            :(
                <>
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
                </>
                )
            }
        </div>
    )
};

export default News
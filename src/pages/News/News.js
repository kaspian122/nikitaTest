import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';
import Spinner from "../../components/Spinner/Spinner";
import './News.scss';

const News = () => {
    const [posts, postsSet] = useState([]);
    const [loading, loadingSet] = useState(true);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(response => {
                postsSet(response.data);
                loadingSet(false)
            })
    };



    useEffect(() => {
        getPosts();
    },[]);

    console.log(posts.map(item => item.id))

    return(
        <>
            {loading ? (<Spinner/>)
            :(
                <div className="posts">
                    {posts.map(post => (
                        <>
                            <div className="to-request" key={post.id}>
                                <Post post={post}/>
                            </div>
                        </>
                    ))}
                </div>
                )
            }
        </>
    )
};

export default News
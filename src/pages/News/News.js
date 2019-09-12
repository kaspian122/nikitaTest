import React, { useEffect, useState } from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';
import './News.scss';

const News = () => {
    const [posts, postsSet] = useState([]);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(response => postsSet(response.data))
    };

    useEffect(() => {
        getPosts();
    },[]);

    return(
        <div className="posts">
            {posts.map(post => (
                <div className="to-request" key={post.id}>
                    <Post post={post}/>
                </div>
            ))}
        </div>
    )
}

export default News
import React, { Component } from 'react';
import { Post } from '../../components/Post/Post';
import { Link } from 'react-router-dom';
import './News.scss';

class News extends Component{
    state = {
        posts: []
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(response => response.json())
            .then(posts => this.setState({posts}))
    };
    render() {
        const { posts } = this.state;
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
}

export default News
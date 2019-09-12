import React from 'react';
import './Post.scss';

export const Post = props => {
    const { post } = props;
    return(
        <div className="postCard">
            <img className="postCard__img" alt="" src={post.url}/>
            <div className="postCard__title">
                <h4>{post.title}</h4>
            </div>
        </div>
    )
};
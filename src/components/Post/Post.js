import React, {useState} from 'react';
import './Post.scss';

const Post = props => {
    const { post } = props;
    const [top, topSet] = useState('');
    const [left, leftSet] = useState('');

    const closettEdge = (x, y, width, height) => {
        const topEdge = distMetric(x, y, width/2, 0);
        const bottomEdge = distMetric(x, y, width / 2, height);
        const leftEdge = distMetric(x, y, 0, height / 2);
        const rightEdge = distMetric(x, y, width, height / 2);
        const min = Math.min(topEdge, bottomEdge, leftEdge, rightEdge);
        switch (min) {
            case leftEdge:
                return 'left';
            case rightEdge:
                return 'right';
            case topEdge:
                return 'top';
            case bottomEdge:
                return 'bottom';
            default:
                return
        }
    };

    const distMetric = (x,y,x1,y1) => {
        const xDiff = x - x1;
        const yDiff = y - y1;
        return Math.pow(xDiff, 2) + Math.pow(yDiff, 2);
    };

    const onMouseEnter = event => {
        const x = event.pageX - event.target.offsetLeft;
        const y = event.pageY - event.target.offsetTop;
        const edge = closettEdge(x, y, event.target.clientWidth, event.target.clientHeight);
        switch (edge) {
            case 'left':
                topSet('0%');
                leftSet('-100%');
                break;
            case 'right':
                topSet('0%');
                leftSet('100%');
                break;
            case 'top':
                topSet('-100%');
                leftSet('0%');
                break;
            case 'bottom':
                topSet('100%');
                leftSet('0%');
                break;
            default:
                return
        }
        console.log(top, left);
    };

    return(
        <>
            <div className="postCard" onMouseEnter={onMouseEnter} onMouseLeave={}>
                <img className="postCard__img" alt="" src={post.url}/>
                <div className="postCard__title">
                    <h4>{post.title}</h4>
                </div>
            </div>
            <div className="slider" style={{top: top, left: left}}/>
        </>
    )
};

export default Post;
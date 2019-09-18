import React, {useState} from 'react';
import './Post.scss';

const Post = props => {
    const [style, setStyle] = useState('');
    const { post } = props;

    const closettEdge = (e, item) => {
        const w = item.offsetWidth;
        const h = item.offsetHeight;
        const position = getPosition(item);

        const x = (e.pageX - position.x - w / 2) * (w > h ? h / w : 1);
        const y = (e.pageY - position.y - h / 2) * (h > w ? w / h : 1);
        return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    const getPosition = (el) => {
        let xPos = 0;
        let yPos = 0;

        while (el) {
            xPos += el.offsetLeft + el.clientLeft;
            yPos += el.offsetTop + el.clientTop;
            el = el.offsetParent;
        }

        return {
            x: xPos,
            y: yPos
        };
    };

    const translateDirection = direction => {
        switch (direction) {
            case 0:
                return 'top';
            case 1:
                return 'right';
            case 2:
                return 'bottom';
            case 3:
                return 'left';
            default:
                return
        }
    };

    const onMouseEnter = event => {
        const currentItem = event.currentTarget;
        const direction = closettEdge(event, currentItem);
        const directionString = translateDirection(direction);
        setStyle('enter--' + directionString);
        console.log('enter', directionString)
    };

    const onMouseLeave = event => {
        const currentItem = event.currentTarget;
        const direction = closettEdge(event, currentItem);
        const directionString = translateDirection(direction);
        setStyle('leave--' + directionString);
        console.log('leave', directionString)
    };

    return(
        <>
            <div className="postCard" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img className="postCard__img" alt="" src={post.url}/>
                    <div className="postCard__title">
                        <h4>{post.title}</h4>
                    </div>
                    <div className={`slider slider--${style}`}/>

            </div>
        </>
    )
};

export default Post;
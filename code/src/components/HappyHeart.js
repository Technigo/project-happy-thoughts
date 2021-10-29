import React from 'react';
import moment from 'moment';

import './HappyHeart.css';

const HappyHeart = ({ thought, onLikesIncreased}) => {
    return (
    <div>
        <p>{thought.message}</p>
    <div className="happyHeart_buttonWrapper">
        <button 
        className="happyHeartButton"
            onClick={() => onLikesIncreased
            (thought._id)}
            style={{ background: thought.hearts >= 1 ? '#ffadad' : '#eaeaea'}} 
        >
            {' '}
            &hearts;
        </button>
        <p className="happyHeartAmount" >&nbsp;x {thought.hearts}</p>
        <p className="happyDate">
            Created at: {moment(thought.createdAt).fromNow()}
        </p>
    </div>
    </div>
    );
};

    export default HappyHeart;
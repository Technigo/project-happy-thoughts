import React from 'react';
import moment from 'moment';

import './HappyHeart.css';

const HappyHeart = ({ thought, onLikesIncreased}) => {
    return (
    <div className="inputContainer">
        <p>{thought.message}</p>
    <div className="heart_buttonWrapper">
    <div className="heartButton_Counter">    
        <button className="heartButton"
            onClick={() => onLikesIncreased
            (thought._id)}
            style={{ background: thought.hearts >= 1 ? '#ffadad' : '#eaeaea'}} 
        >
            <span role="img" aria-label="heart">
                ❤️
            </span>
        </button>
        <p className="heartAmount" >&nbsp;x{thought.hearts}</p>
    </div>
        <p className="heartDate">
            Created at: {moment(thought.createdAt).fromNow()}
        </p>
    </div>
    </div>
    );
};

    export default HappyHeart;
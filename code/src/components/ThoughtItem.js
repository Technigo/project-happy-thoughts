import React from 'react';
import moment from 'moment';

const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <div className="thought-container">
        <p>{thought.message}</p>
        <div className="like-button">
        <button
        className="heart-button"
        onClick={() => onLikesIncrease(thought._id)}> 
        {''}
        <span className="heart" role="img" aria-label="like">❤️ </span>
        x{thought.hearts}
        </button>
        </div>
        <p className="date">
          Created at: {moment (thought.createdAt).fromNow()}</p>
        </div>
        
    );

};

export default ThoughtItem;
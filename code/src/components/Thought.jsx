import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const Thought = ({ thought, addLike }) => {
    return (
        <div className='thought-container'>
            <p className="thought-text">{thought.message}</p>
            <div className="thought-info-container">
                <button className='btn' onClick={(event) => addLike(thought._id, event)}>
                    <span className='icon' role="img" aria-label="heart" aria-hidden="false">❤️</span>
                    <span>x {thought.hearts}</span>
                </button>
               
                <p>{formatDistanceToNow(new Date(thought.createdAt), { addSuffix: true })}</p>

            </div>
        </div>
    );
}

export default Thought;

//<

// <button className="button" onClick={event => onButtonClick(event)} > Click me! </button>
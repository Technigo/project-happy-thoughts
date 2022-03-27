import React from 'react';
import { formatDistanceToNow } from 'date-fns'; 

const Thought = ({thought, addLike}) => {
    return (
        <div>
            <p>{thought.message}</p>
            <p>{thought.hearts}</p>
            <p>{formatDistanceToNow(new Date(thought.createdAt), {addSuffix: true})}
            </p>
            <button className='btn' onClick={(event) => addLike(thought._id, event)}>Like</button>
        </div>
    );
}

export default Thought;

//<

// <button className="button" onClick={event => onButtonClick(event)} > Click me! </button>
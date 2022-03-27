import React from 'react';
import { formatDistanceToNow } from 'date-fns'; 

const Thought = ({thought, addLike}) => {
    return (
        <div>
            <p>{thought.message}</p>
            <p>{formatDistanceToNow(new Date(thought.createdAt), {addSuffix: true})}
            </p>
            <button className='btn' onClick={addLike(thought.key)}>Like</button>
        </div>
    );
}

export default Thought;

//<

// <button className="button" onClick={event => onButtonClick(event)} > Click me! </button>
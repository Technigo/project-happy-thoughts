import React from 'react';
import moment from 'moment';

const ThoughtItem = ({ thought, onLikesIncreased}) => {
    return (

    <div key={thought._id}>
        <p>{thought.message}</p>
        <button onClick={() => onLikesIncreased(thought._id)}>
            {' '}
            &hearts; {thought.hearts}
            </button>
        <p className="date">
            - Created at: {moment(thought.createdAt).fromNow()}
        </p>
    </div>
    );
};

    export default ThoughtItem;
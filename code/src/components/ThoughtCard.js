import React from 'react';
import moment from 'moment';

import './thoughtCard.css'

export const ThoughtCard = ({ thought, onLikesIncrease }) => {

    return (
        <div key={thought._id} className="thought-card">
            <p>{thought.message}</p>
            <button 
            className="likes-button" 
            onClick={() => onLikesIncrease(thought._id)}> 
            {/* why? */}
            {' '}
            &hearts; {thought.hearts}</button>

            <p className="date">
                {moment(thought.createdAt).fromNow()}
            </p>
        </div>
    );
};
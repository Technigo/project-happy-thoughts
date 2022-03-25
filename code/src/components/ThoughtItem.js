import React from 'react';

import moment from 'moment';

const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <section className="thought-item">
        <p className="message">{thought.message}</p>
        <div className="likes-date">
            <div className="likes">
        <button 
        className="like-button"
        onClick={() => 
        onLikesIncrease(thought._id)}>
          {''}
          &hearts; {thought.hearts}
        </button>
        <p className="date">
          - Created at: {moment(thought.createdAt).fromNow()}</p>
      </div>
      </div>
      </section>
    );
};

export default ThoughtItem;
/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

const ThoughtCard = ({ thoughtsList, handleLikedThoughts }) => {
  return (
    <main>
      {thoughtsList.map((thought) => (
        <div className='message-wrapper' key={thought._id}>
          <p className='thought-text'>{thought.message}</p>
          <div className='likes-container'>
            <button
              className='icon'
              type='button'
              onClick={() => handleLikedThoughts(thought._id)}
            >
              <span className='hearts'>&hearts;</span>
            </button>
            <span className='num-likes'> x {thought.hearts}</span>
            <p className='date'>
              - Created at: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ThoughtCard;

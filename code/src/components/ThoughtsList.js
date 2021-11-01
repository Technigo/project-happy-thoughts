import React from 'react';
import moment from 'moment';

const ThoughtsList = ({ thoughts, onLikesIncrease }) => {
  return (
    <div className='thought-cards-container'>
      {thoughts.map((thought) => (
        <div key={thought._id} className='thought-card'>
          <p className='thought-text'>{thought.message}</p>

          <div className='thought-card-info'>
            <div className='like-info'>
              <button
                onClick={() => onLikesIncrease(thought._id)}
                type='button'
                className={
                  thought.hearts > 0
                    ? 'like-button like-button-clicked'
                    : 'like-button'
                }
              >
                <span className='like-heart' role='img' aria-label='heart'>
                  ❤️
                </span>
              </button>
              <p className='likes'>x {thought.hearts}</p>
            </div>

            <p className='date'>
              Posted: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThoughtsList;

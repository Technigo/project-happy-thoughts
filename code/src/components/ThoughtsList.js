import React from 'react';
import moment from 'moment';

const ThoughtsList = ({ thoughts, onLikesIncrease }) => {
  return (
    <div className='thought-cards-container'>
      {thoughts.map((thought) => (
        <div key={thought._id} className='thought-card'>
          <p className='thought-text'>{thought.message}</p>
          {/* <LikeButton id={thought._id} /> */}

          <div className='thought-card-info'>
            <div className='like-info'>
              <button
                onClick={() => onLikesIncrease(thought._id)}
                type='button'
                className='like-button'
                // onClick={(event) => onLikeButtonClick(event)}
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

/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment';

const ThoughtCard = ({ thoughtsList, handleLikedThoughts }) => {
  return (
    <>
      {thoughtsList.map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button
            type='button'
            onClick={() => handleLikedThoughts(thought._id)}
          >
            {' '}
            &hearts;{thought.hearts}
          </button>
          <p className='date'>
            - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </>
  );
};

export default ThoughtCard;

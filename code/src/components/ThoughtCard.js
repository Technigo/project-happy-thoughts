import React from 'react';
import moment from 'moment';

const ThoughtCard = ({ thoughtsList }) => {
  return (
    <>
      {thoughtsList.map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button type='button'> &hearts;{thought.hearts}</button>
          <p className='date'>
            - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </>
  );
};

export default ThoughtCard;

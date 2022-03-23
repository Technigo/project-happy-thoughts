import React from 'react';
import moment from 'moment';

const ThoughtsList = ({ thought, onLikeIncrease }) => {
  return (
    <section className='thoughtCard'>
      <p className='thoughtMessage'>{thought.message}</p>
      <div className='likesContainer'>
        <div className='likesAmountContainer'>
          <button
            onClick={() => onLikeIncrease(thought._id)}
            className='likeButton'
          >
            <span aria-label='heart' role='img' className='heartButtonIcon'>
              ❤️
            </span>
          </button>
          <p className='heartsCounter'>x {thought.hearts}</p>
        </div>
        <p className='date'>{moment(thought.createdAt).fromNow()}</p>
      </div>
    </section>
  );
};

export default ThoughtsList;

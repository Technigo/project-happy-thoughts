import React from 'react';
import moment from 'moment';

const ThoughtsList = ({ thought, onLikeIncrease }) => {
  return (
    <section className='thoughtCard'>
      <p className='thoughtMessage'>{thought.message}</p>
      <div className='likesContainer'>
        <div className='likesAmountContainer'>
          <div class='likesWrapper'>
            <button
              onClick={() => onLikeIncrease(thought._id)}
              className='likeButton'
            >
              <span aria-label='heart' role='img' className='heartButtonIcon'>
                ❤️
              </span>
            </button>
            <span className='heartsCounter'> x {thought.hearts}</span>
          </div>
          <p className='date'>{moment(thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </section>
  );
};

export default ThoughtsList;

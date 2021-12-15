import React from 'react';
import moment from 'moment';

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
<<<<<<< HEAD
    <div className='thoughts-card'>
      <div className='test'>
        <p className='thought-p'>{thought.message}</p>
        <div className='thoughts-container'>
          <div className='heart-likes'>
            <button
              style={{
                backgroundColor: thought.hearts > 0 ? 'lightpink' : 'lightgrey',
              }}
              onClick={() => onLikesIncrease(thought._id)}
              className='btn'
            >
              {' '}
              <span>❤</span>
            </button>
            <p>x{thought.hearts} </p>
          </div>
          <p className='date'>{moment(thought.createdAt).fromNow()}</p>
=======
    <div className="thoughts-card">
      <p className="thought-p">{thought.message}</p>
      <div className="thoughts-container">
        <div className="heart-likes">
          <button
            style={{
              backgroundColor: thought.hearts > 0 ? "lightpink" : "lightgrey",
            }}
            onClick={() => onLikesIncrease(thought._id)}
            className="btn"
          >
            {" "}
            <span>❤</span>
          </button>
          <p>x{thought.hearts} </p>
>>>>>>> b26ebeb9849581edd0bfb79510a39c73be4693c2
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtItem;

import React from 'react';
import moment from 'moment'

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
  <div className="thought-item-form">
     <p>{thought.message}</p>
   <div className="thought-item-button-container">
     <button 
     className="thought-item-button" 
     onClick={() => onLikesIncrease(thought._id)}
     style={{background: thought.hearts >= 1 ? '#fdc4c4' : '#eaeaea'}}> 
      <span role='img' aria-label='heart'>
            ❤️
          </span> 
     </button>
    <p className='likes'>x {thought.hearts}</p>
  </div>
     <p className="date">{moment(thought.createdAt).fromNow()}</p> 
    </div>
  );
};

export default ThoughtItem;
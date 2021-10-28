import React from 'react';
import './thought.css';

const Thoughts = ({ message, date, hearts, _id,  onLikeAThought }) => {
  
  return (
    <div className="thought" >
      <p className="message"> {message}</p>
      <div className="other-details">
        <div className="likes">
          <button type="button"  className="heart" onClick={()=>onLikeAThought(_id)}>
            {' '}
            &hearts;{' '}
          </button>
          <p>x {hearts}</p>
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Thoughts;

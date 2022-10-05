import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtDetails = ({ createdAt, hearts }) => {
  return (
    <div className="thought-detail-container">
      <div className="button-container">
        <button className="heart-button-liked" type="submit">
          <span className="heart-emoji" role="img" aria-label="heart emoji">
            💕
          </span>
        </button>
        <p>x {hearts}</p>
      </div>
      <p className="date-label">
        {formatDistanceToNow(new Date(createdAt), Date.now(), {
          addSuffix: true
        })}
        {' ago'}
      </p>
    </div>
  );
};

export default ThoughtDetails;

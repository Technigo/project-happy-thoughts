/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { HandleLikeButtonClick } from './util';

const ThoughtDetails = ({ thought }) => {
  // destructuring of variables from the thought object
  const { createdAt, hearts, _id } = thought;

  // Local state variable to update only the thought that was liked
  const [likes, setLikes] = useState(hearts);

  return (
    <div className="thought-detail-container">
      <div className="button-container">
        <button
          className="heart-button"
          type="submit"
          onClick={() => {
            HandleLikeButtonClick(_id, setLikes);
          }}
        >
          <span className="heart-emoji" role="img" aria-label="heart emoji">
            💕
          </span>
        </button>
        <p>x {likes}</p>
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

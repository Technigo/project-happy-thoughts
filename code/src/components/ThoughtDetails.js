/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { HandleLikeButtonClick } from './util';

const ThoughtDetails = ({ thought }) => {
  // destructuring of variables from the thought object
  const { createdAt, hearts, _id } = thought;

  // Local state variable linked to the API to update only the thought that was liked
  const [likes, setLikes] = useState(hearts);

  // local state variable to set/get localStorage
  const [localLikes, setLocalLikes] = useState(
    Number(localStorage.getItem(`localLikes ${_id}`))
  );

  const handleHeartButtonClick = () => {
    // 1. sends a new heart to the api for the current thought
    HandleLikeButtonClick(_id, setLikes);
    // 2. updates local state variable which reloads the component
    setLocalLikes(localLikes + 1);
    // 3. updates localStorage which keeps track of how many times user has liked something locally
    localStorage.setItem(`localLikes ${_id}`, JSON.stringify(localLikes));
  };

  return (
    <div className="bajs">
      <div className="thought-detail-container">
        <div className="button-container">
          <button
            className="heart-button"
            type="submit"
            onClick={handleHeartButtonClick}
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
      {localLikes > 0 && (
        <p className="like-text">
          You have liked this thought {localLikes} times
        </p>
      )}
    </div>
  );
};

export default ThoughtDetails;

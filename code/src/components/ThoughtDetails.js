/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { handleLikeButtonClick } from './util';

const ThoughtDetails = ({ thought }) => {
  // Destructuring of variables from the thought object
  const { createdAt, hearts, _id } = thought;

  // Local state variable linked to the API to update only the thought that was liked
  const [likes, setLikes] = useState(hearts);

  // local state variable to set/get localStorage
  const [localLikes, setLocalLikes] = useState(
    Number(localStorage.getItem(`localLikes ${_id}`))
  );

  const hiddenHeartToggle = (event) => {
    // targets the hidden heart element
    const animatedHeart = event.target.closest('.heart-button').firstChild;
    // toggles the hidden class for 1 second
    animatedHeart.classList.remove('hidden-heart');
    setTimeout(() => animatedHeart.classList.add('hidden-heart'), 1000);
  };

  const handleHeartButtonClick = (event) => {
    // 1. sends a new heart to the api for the current thought
    handleLikeButtonClick(_id, setLikes);
    // 2. updates local state variable which reloads the component
    setLocalLikes(localLikes + 1);
    // 3. updates localStorage which keeps track of how many times user has liked something locally
    localStorage.setItem(`localLikes ${_id}`, JSON.stringify(localLikes));
    // 4. remove hidden for 1 second for the duration of the animation
    hiddenHeartToggle(event);
  };

  return (
    <div>
      <div className="thought-detail-container">
        <div className="button-container">
          <button
            className={
              localLikes > 0
                ? 'heart-button heart-button-liked'
                : 'heart-button'
            }
            type="submit"
            onClick={handleHeartButtonClick}
          >
            <span className="animate hidden-heart">❤️</span>
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

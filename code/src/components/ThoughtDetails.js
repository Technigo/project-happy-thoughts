/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtDetails = ({ thought }) => {
  // destructuring of variables from the thought object
  const { createdAt, hearts, _id } = thought;

  // Local state variable to update only the thought that was liked
  const [likes, setLikes] = useState(hearts);

  // TODO, PUT THIS INTO A UTIL COMPONENT
  const handleLikeButtonClick = () => {
    // posts a new like to the like endpoint for the current thought
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }
    )
      // then receives an updated thought
      .then((res) => res.json())
      // re-renders that thought by setting new state
      .then((updatedThought) => {
        setLikes(updatedThought.hearts);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="thought-detail-container">
      <div className="button-container">
        <button
          className="heart-button-liked"
          type="submit"
          onClick={handleLikeButtonClick}
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

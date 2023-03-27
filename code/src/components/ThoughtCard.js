/* eslint-disable no-underscore-dangle */
// Import necessary libraries and components
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './ThoughtCard.css';
import Loader from 'Loader';

// Create a ThoughtCard component that takes three props:
// loading, thoughtsList, and onHeartButtonClick
const ThoughtCard = ({ loading, thoughtsList, onHeartButtonClick }) => {
  // If the "loading" prop is true, show the Loader component
  // to indicate that we're waiting for data
  if (loading) {
    return <Loader />
  }

  // If the "loading" prop is false, show the list of thoughts
  return (
    <section className="thoughts-section">
      {/* Loop through the thoughtsList array and display each thought */}
      {thoughtsList.map((thought) => (
        <div key={thought._id} className="box thought-box">
          {/* Show the message of the thought */}
          <h4 className="posted-thought">{thought.message}</h4>
          {/* Create a button for liking the thought */}
          <button
            type="button"
            className={thought.hearts === 0 ? 'no-likes-button' : 'like-button'}
            onClick={() => onHeartButtonClick(thought._id)}>
            {/* Display a heart icon inside the button */}
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                color: '#ffffff',
                opacity: thought.hearts === 0 ? 0.6 : 1,
                background: 'transparent'
              }} />
          </button>
          {/* Show the number of likes (hearts) for the thought */}
          <p className="likes-count">x {thought.hearts}</p>
          {/* Show how long ago the thought was posted */}
          <p className="posted-time">
            {formatDistanceToNow(new Date(thought.createdAt), Date.now(), {
              addSuffix: true
            })}
          </p>
        </div>
      ))}
    </section>
  );
}

// Export the ThoughtCard component so it can be used in other parts of the app
export default ThoughtCard;
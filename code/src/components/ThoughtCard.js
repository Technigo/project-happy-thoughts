// Import necessary libraries and components
/* eslint-disable max-len */
import React from 'react';
import { formatDistance } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './ThoughtCard.css';
import Loader from '../Loader'; // Check the correct path for Loader component

// Create a ThoughtCard component that takes four props:
// loading, thoughtsList, onHeartButtonClick, and setThoughtsList
const ThoughtCard = ({ loading, thoughtsList, onHeartButtonClick, setThoughtsList }) => {
  // If the "loading" prop is true, show the Loader component
  // to indicate that we're waiting for data
  if (loading) {
    return <Loader />
  }

  // Add the delete function here
  const onDeleteButtonClick = (Id) => {
    const updatedThoughtsList = thoughtsList.map((thought) => {
      // eslint-disable-next-line
      if (thought._id === Id) {
        // eslint-disable-next-line
        return { ...thought, isDeleting: true };
      }
      return thought;
    });
    setThoughtsList(updatedThoughtsList);
    const options = {
      method: 'DELETE'
    };
    fetch(`https://science-lab.onrender.com/thoughts/${Id}`, options)
      .then((response) => response.json())
      .then(() => {
        setThoughtsList(updatedThoughtsList.filter((thought) => thought._id !== Id));
      })
      .catch((error) => console.log(error));
  };

  // If the "loading" prop is false, show the list of thoughts
  return (
    <section className="thoughts-section">
      {/* Loop through the thoughtsList array and display each thought */}
      {thoughtsList.map((thought) => {
        // Add the logging code here
        console.log('createdAt:', thought.createdAt);
        console.log('new Date:', new Date(thought.createdAt));

        /* eslint-enable no-unused-vars, no-underscore-dangle */
        let postClassName = 'box thought-box';
        if (thought.isDeleting) {
          postClassName += ' fade-out';
        }

        return (
          <div key={thought._id} className={postClassName}>
            <div className="like-and-delete-wrapper">
              <div className="like-wrapper">
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
              </div>
              <button type="button" className="delete-button" onClick={() => onDeleteButtonClick(thought._id)}>x</button>
            </div>
            {/* Show the message of the thought */}
            <h4 className="posted-thought">{thought.name} says: {thought.message}</h4>
            {/* Show how long ago the thought was posted */}
            <p className="posted-time" key={thought.createdAt}>
              {formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        );
      })}
    </section>
  );
}

// Export the ThoughtCard component so it can be used in other parts of the app
export default ThoughtCard;

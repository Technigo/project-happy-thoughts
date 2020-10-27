import React from 'react';
import moment from 'moment';

//ThoughtsCard component needs a lot of data that was gathered in App component when
//doing the main Fetch to get the initial thoughts array, so we get it passed here via props
export const ThoughtsCard = ({id, message, timeCreated, hearts, addLike}) => {
  //handleLikes is the function that will add a heart to the specific thought in the API
  //by doing a POST request
  //using that thought's id we make sure we add the heart to the right thought
  const handleLikes = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,{
      method: 'POST',
      body: "",
      headers: {"Content-Type": "application/json"}
      //addLike is a function we got from App sent as prop, and is responsible for visually
      //adding +1 to the amount of likes a thought has (it is explained in the App component)
    }).then(() => {addLike(id)})
  };

  return (
    <div className="thought-card">
      <p>{message}</p>
      <p>
        <button 
          onClick={handleLikes}
          className="heart-button"
          //Condition to determine heart button's back color depending on the amount of hears it has
          style={{backgroundColor: hearts > 0 ? '#ffadad' : '#f2f0f0'}}        >
          <span role="img" aria-label="Heart emoji">&#128151;</span>
        </button>
         x {hearts}
      </p>
      {/* Using the Moment.js package to determine when thought was posted */}
      <p>{moment(timeCreated).fromNow()}</p>
    </div>
  );
};
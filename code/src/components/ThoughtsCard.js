import React from 'react';
import moment from 'moment';

export const ThoughtsCard = ({id, message, timeCreated, hearts, addLike}) => {
  const handleLikes = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,{
      method: 'POST',
      body: "",
      headers: {"Content-Type": "application/json"}
    }).then(() => {addLike(id)})
  };

  return (
    <div className="thought-card">
      <p>{message}</p>
      <p>
        <button onClick={handleLikes}>
          <span role="img" aria-label="Heart emoji">&#128151;</span>
        </button>
        x {hearts}
      </p>
      <p>{moment(timeCreated).fromNow()}</p>
    </div>
  );
};
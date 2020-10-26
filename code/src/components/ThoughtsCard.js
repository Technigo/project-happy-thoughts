import React from 'react';
import moment from 'moment';

export const ThoughtsCard = ({id, message, timeCreated, likes, setLikes, hearts}) => {
  const handleLikes = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      body: "",
      headers: {"Content-Type": "application/json"}
    }) .then(() => setLikes(id))
  };

  return (
    <div className="thought-card">
      <p>{message}</p>
      <p>
        <button onClick={handleLikes}>
          <span>&#128151;</span>
        </button>
      </p>
      <p>{moment(timeCreated).fromNow()}</p>
    </div>
  );
};
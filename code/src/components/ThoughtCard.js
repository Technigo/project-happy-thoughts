import React from 'react';
import moment from 'moment';

export const ThoughtCard = props => {
  const {message, createdAt, hearts, _id} = props.thought;
  const LikedThoughtUrl = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`;

  const handleClick = () => {
    fetch(LikedThoughtUrl, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body:"",
    }).then(() => props.onLiked(_id));

  }

  return (
    <div className="thought-card">
      <p>{message}</p>
      <button 
        onClick={handleClick}
        style={{background: hearts > 0 ? "#ffadad" : "#f3f1f1" }}>
          <span role="img" aria-label="Heart">
            {"💗"}
          </span>
      </button>
      <p>{moment(createdAt).fromNow()}</p>
    </div>
  );
};
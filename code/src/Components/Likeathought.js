import React from 'react';
import 'styles/likeathought.css';

// Number of 'hearts' will increase when clicked
export const Likeathought = ({hearts , id, onThoughtLiked}) => {

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: ""
      }).then(() => {
        onThoughtLiked(id);
      });
    };

  return (
    <div className="likes">
      <button
        className="like-button"
        onClick={handleClick}
        style={{ background: hearts > 0 ? "#FEACAC" : "#EAEAEA"}}
        tabIndex="0"
      >
        <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
      </button>
      x {hearts}
    </div>
  );
};
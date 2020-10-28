import React from 'react';
import 'styles/likeathought.css';

// POST https://happy-thoughts-technigo.herokuapp.com/thoughts/{THOUGHT_ID}/like
// Replace THOUGHT_ID with the _id parameter of the thought the user clicked on
// Number of 'hearts' will increase when clicked

export const Likeathought = (props) => {
  const hearts = props.hearts
  const _id = props._id

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: ""
      }).then(() => {
        props.onThoughtLiked(_id)
      });
    };

  return (
    <div className="likes">
      <button
        className="like-button"
        onClick={handleClick}
        style={{ background: hearts > 0 ? "#FEACAC" : "#EAEAEA"}}
      >
        <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
      </button>
      x {hearts}
    </div>
  );
};
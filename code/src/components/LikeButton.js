import React, { useState } from "react";

export const LikeButton = ({ likes, id, fetchLikes }) => {
  const [liked, setLiked] = useState(false);

  /*first this function checks if the state liked is true or false 
  (meaning - has this button already been pressed by the user?). 
  If it's false a fetch-post is executed */
  const toggleLike = (messageID) => {
    liked ? setLiked(false) : setLiked(true);
    fetchLikes(messageID, liked);
  };

  
  return (
    <button className="like-btn" onClick={() => toggleLike(id)}>
      <span
        role="img"
        /* by adding a state  to the className this element can change 
        background-color depending on if it has the class .heart-is-true or .heart-is-false */
        className={`like-btn__heart heart-is-${liked}`}
        aria-label="heart-emoji"
      >
        &#10084;&#65039;
      </span>
      <p className="like-btn__text"> x {likes}</p>
    </button>
  );
};

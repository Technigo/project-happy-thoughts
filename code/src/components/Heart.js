import React, { useState, useEffect } from "react";

export const Heart = props => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.heart)

  useEffect(()=>{
    if(liked) setLikeCount(likeCount+1)
  }, [liked])

  const handleClick = (event) => {
    setLiked(prev => !prev)
    fetch("https://technigo-thoughts.herokuapp.com/"+props.id, {method: "POST", body:""})
  }

  return (
    <div className="heart">
      <button
        className={`heart-button${liked ? "-liked" : "-unliked"}`}
        onClick={event=>handleClick(event)}
      >
        &#10084;&#65039;
      </button>
      <span id="hearts-count">x {likeCount}</span>
    </div>
  );
};

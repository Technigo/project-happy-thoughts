import React from "react";
import "./LikeButton.css";

export const LikeButton = (props) => {
  const likes_url = `https://technigo-thoughts.herokuapp.com/${props.id}/like`;

  //Posts a like to API
  const handleClick = () => {
    fetch(likes_url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    });
    props.onMessageLiked(props.id);
  };

  //Returns like-button
  return (
    <button
      onClick={handleClick}
      className={props.likes > 0 ? "liked" : "notLiked"}
    >
      <span className="like-emoji" role="img" aria-label="red heart">
        {" ❤️"}
      </span>
    </button>
  );
};

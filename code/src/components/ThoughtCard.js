import React from "react";
import moment from "moment";

import HeartButtonImage from "../assets/heart.png";

export const ThoughtCard = props => {
  const {message, createdAt, hearts, _id} = props.thought;
  // const likedthoughturl = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`;
  const LIKE_URL = `https://happy-thoughts-sofia.herokuapp.com/${_id}/heart`;

  const handleClick = () => {
    fetch(LIKE_URL, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body:"",
    }).then(() => props.onLiked(_id));

  }

  return (
    <div className="thought-card">
      <p>{message}</p>
      <p>
      <button className="heart-button"
        onClick={handleClick}
        style={{background: hearts > 0 ? "#ffadad" : "#f3f1f1" }}>
          <img className="pixel-heart-button" src={HeartButtonImage} alt= "heart" aria-label="Heart"/>
      </button>
      x {hearts}
      </p>
      <p className="created-at">{moment(createdAt).fromNow()}</p>
    </div>
  );
};
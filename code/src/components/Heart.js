import React from 'react';
import "./heart.css";

export const Heart = (props) => {

  return (
    <li><button className="like-button"><span role="img" aria-label="heart">❤️ </span></button> x {props.hearts}</li>
  )
}
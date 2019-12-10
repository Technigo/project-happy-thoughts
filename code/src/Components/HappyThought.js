import React from "react";
import "./happyThought.css";
import moment from "moment"

export const HappyThought = props => {
  const { message, hearts, createdAt } = props.thought;
  return (
    <article>
      <h1>{message}</h1>
      <span>{hearts} likes</span>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  );
};

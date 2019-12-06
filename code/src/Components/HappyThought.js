import React from "react";
import "./happyThought.css";
import moment from "moment";

export const HappyThought = props => {
  const { message, heart, createdAt } = props.thought;

  return (
    <article className="happy-thought">
      <h1>{message}</h1>
      <span>{heart} count</span>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  );
};

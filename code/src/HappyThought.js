import React from 'react';
import moment from "moment";
import "./happyThought.css";
// import "./thoughtLike.css";

export const HappyThought = props => {
  const {message, hearts, createdAt, _id} = props.thought

  const handleCLick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
      method: "POST",
      body: "",
      headers: {"Content-Type" : "application/json"}
  }).then(() => props.onLiked(_id))

  }
  return (
    <article className="happy-thought">
      <h3>{message}</h3>
      <p>
        <button
          onClick={handleCLick}
          //how to add another class here
          className={ hearts > 5 ? "superLiked" : hearts > 0 ? "liked" : "not-liked"}
        >
          <span role="img" aria-lable="Heart">
            {"❤️"}
          </span>
          </button>  
          x {hearts}
      </p>
      <p> {moment(createdAt).fromNow()}</p>
    </article>
  )
}

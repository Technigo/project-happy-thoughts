import React from "react";
import "./happyThought.css";
import moment from "moment";

//const thoughtsUrl = "https://technigo-thoughts.herokuapp.com/";//
const thoughtsUrl = "https://happy-thoughts-api-agnes.herokuapp.com"

export const HappyThought = props => {
  const { message, hearts, createdAt, _id } = props.thought;

  const handleClick = () => {
    fetch(`${thoughtsUrl}/${_id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    })
      .then(() => props.onLiked(_id));
  };

  return (
    <article className="happy-thought">
      <h3>{message}</h3>
      <div className="happy-footer">
        <div className="heart-container">
          <button
            onClick={handleClick}
            style={{ background: hearts > 0 ? "#ffadad" : "#f3f1f1" }}
          >
            <span role="img" aria-label="Heart">
              {"❤️"}
            </span>
          </button>
          x {hearts}
        </div>
        <span>{moment(createdAt).fromNow()}</span>
      </div>
    </article>
  );
};

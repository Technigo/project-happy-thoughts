import React from "react";

import TimeStamp from "./partials/TimeStamp";

const ThoughtCards = ({ thought, setLikes, id }) => {

  const handleLikesClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }).then(() => setLikes(id))
  }

  return (
    <section className="thought-cards cards" key={thought._id}>
      <p>{thought.message}</p>
      <div className="button-wrapper">
        <div>
          <button
            onClick={handleLikesClick}
            className={(thought.hearts === 0 ? "heart-button" : "heart-button red-heart-button")}>
            <span role="img" aria-label="heart icon">❤️</span>
          </button>
          <p className="likes">x {thought.hearts}</p>
        </div>
        <TimeStamp createdAt={thought.createdAt} />
      </div>
    </section>
  );
};

export default ThoughtCards;
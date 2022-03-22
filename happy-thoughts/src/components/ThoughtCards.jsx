import React, { useState, useEffect } from "react";

import TimeStamp from "./partials/TimeStamp";
import ThoughtForm from "./ThoughtForm";

const ThoughtCards = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then(res => res.json())
      .then(thoughts => setThoughts(thoughts))
  }, []);

  return (
    <>
      <ThoughtForm setThoughts={setThoughts} />
      <div>
      {thoughts.map(thought => (
        <section className="thought-cards cards" key={thought._id}>
          <p>{thought.message}</p>
          <div className="details-wrapper">
            <div>
              <button className={(thought.hearts === 0 ? "heart-button" : "heart-button red-heart-button")}>
                <span role="img" aria-label="heart icon">❤️</span>
              </button>
              <p className="likes">x {thought.hearts}</p>
            </div>
            <TimeStamp createdAt={thought.createdAt} />
          </div>
        </section>
      ))}
      </div>
    </>
  );
};

export default ThoughtCards;
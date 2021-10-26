import React, { useEffect, useState } from "react";

import { API_URL } from "./utils/urls";
import Thoughts from "./components/Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [likeCounter, setLikeCounter] = useState("");

  const onLikeCounterChange = (event) => {
    setLikeCounter(event.target.value);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };

  return (
    <div className="main-container">
      <form className="input-container" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <input
          className="input"
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button className="submit-button" type="submit">
          <span className="heart-emoji" role="img" aria-label="Heart-emoji">
            ❤️
          </span>
          <p className="submit-button-text"> Send Happy Thought </p>
          <span className="heart-emoji" role="img" aria-label="Heart-emoji">
            ❤️
          </span>
        </button>
      </form>

      <Thoughts
        thoughts={thoughts}
        likeCounter={likeCounter}
        onLikeCounterChange={onLikeCounterChange}
      />
    </div>
  );
};

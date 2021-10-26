import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

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

  const postLikedThought = async (id) =>
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

  const onMessageLiked = async (likedMessageId) => {
    // New updated thought object sent from the API
    const updatedThought = await postLikedThought(likedMessageId);

    const updatedMessage = thoughts.map((thought) => {
      if (thought._id === likedMessageId) {
        // Set the thoughts hearts to the new updated thought hearts from the API
        thought.hearts = updatedThought.hearts;
      }
      return thought;
    });

    setThoughts(updatedMessage);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="input-card">
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button className="submit-button" type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>

      {thoughts.map((thought) => (
        <div className="thoughts-card" key={thought._id}>
          <p>{thought.message}</p>
          <div className="heart-date-aligment">
            <div className="like-wrapper">
              <button
                className="card-heart"
                onClick={() => onMessageLiked(thought._id)}
              >
                <span role="img" aria-label="heart emoji">
                  ❤️
                </span>
              </button>
              x {thought.hearts}
            </div>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

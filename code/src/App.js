import React, { useEffect, useState } from "react";

import ThoughtForm from "components/ThoughtForm";
import ThoughtItem from "components/ThoughtItem";

import { API_URL, URL_LIKES } from "utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState();

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  const handleFormSubmit = (event) => {
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
      .then((data) => {
        // setThoughts([data, ...thoughts])

        fetchThoughts();
      });
  };

  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(URL_LIKES(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts();
      });
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <ThoughtForm
          onFormSubmit={handleFormSubmit}
          newThought={newThought}
          setNewThought={setNewThought}
        />
      </div>
      <div className="new-container">
        {thoughts.map((thought) => (
          <ThoughtItem
            key={thought._id}
            thought={thought}
            onLikesIncrease={handleLikesIncrease}
          />
        ))}
      </div>
    </div>
  );
};

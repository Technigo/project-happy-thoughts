import React, { useEffect, useState } from "react";

import ThoughtForm from "./components/ThoughtForm";
import ThoughtMessages from "./components/ThoughtMessages";
// import LoadingItem from "./components/Loading";

import { API_URL, LIKES_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleInputChange = event => {
    setNewThought(event.target.value);
    setCount(event.target.value.length);
  };

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data));
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => {
        fetchThoughts(data);
      });

    setNewThought("");
  };

  const handleLikesIncrease = thoughtId => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then(res => res.json())
      .then(data => {
        fetchThoughts(data);
      });
  };

  return (
    <div>
      {/* {loading && <LoadingItem />} */}
      <ThoughtForm
        newThought={newThought}
        setNewThought={setNewThought}
        onFormSubmit={handleFormSubmit}
        count={count}
        handleInputChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />

      {thoughts.map(thought => (
        <ThoughtMessages
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  );
};

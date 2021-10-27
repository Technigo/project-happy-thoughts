import React, { useEffect, useState } from "react";
import "./form.css";

import { API_URL, API_URL_HEART } from "utils/urls";
import Thoughts from "./Thoughts";
import ThoughtInput from "./ThoughtInput";

const Form = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

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
      .then((data) => setThoughts([data, ...thoughts]));
  };

  const handleHeartClick = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(API_URL_HEART(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });

        setThoughts(updatedThoughts);
      });
  };

  return (
    <div className="main-container">
      <ThoughtInput
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.map((thought) => (
        <Thoughts
          key={thought._id}
          thought={thought}
          onHeartClick={handleHeartClick}
        />
      ))}
    </div>
  );
};

// <ThoughtInput
//   onFormSubmit={handleFormSubmit}
//   newTought={newThought}
//   setNewThought={setNewThought}
// />
// <Thoughts />

export default Form;

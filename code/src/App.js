import React, { useState, useEffect } from "react";
import { API_URL } from "./utilis/urls";
import { LIKE_URL } from "./utilis/urls";
import Form from "components/Form";
import Thoughts from "./components/Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
      .catch((err) => console.log("error:", err));
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
      .then((data) => setThoughts([data, ...thoughts]))
      .catch((err) => console.log("error:", err));
  };

  const onLikeSubmit = (id) => {
    const likes = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    const onLikeChange = thoughts.map((thought) => {
      if (thought._id === id) {
        thought.hearts++;
      }
      return thought;
    });

    fetch(LIKE_URL(id), likes)
      .then((res) => res.json())
      .then(() => setThoughts(onLikeChange))
      .catch((err) => console.log("error:", err));
  };
  return (
    <div className="content-wrapper">
      <Form
        setNewThought={setNewThought}
        onFormSubmit={onFormSubmit}
        newThought={newThought}
      />
      <Thoughts thoughts={thoughts} onLikeSubmit={onLikeSubmit} />
    </div>
  );
};

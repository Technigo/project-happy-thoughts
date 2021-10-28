import React, { useEffect, useState } from "react";
import { Form } from "Components/Form";
import { API_URL, LIKES_URL } from "./utils/urls";
import { Message } from "./Components/Message";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data));
  };

  const onNewThoughtChange = event => {
    setNewThought(event.target.value);
    setCounter(event.target.value.length);
  };

  const onFormSubmit = event => {
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
    setCounter(0);
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
      <Form
        newThought={newThought}
        setNewThought={setNewThought}
        onFormSubmit={onFormSubmit}
        onNewThoughtChange={onNewThoughtChange}
        counter={counter}
      />
      {thoughts.map(thought => (
        <Message
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>
  );
};

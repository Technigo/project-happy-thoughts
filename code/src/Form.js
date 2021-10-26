import React, { useState } from "react";
import { API_URL } from "./utils/urls";

export const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("");

  const onNewThoughtChange = event => {
    setNewThought(event.target.value);
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
      .then(data => setThoughts([data, ...thoughts]));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">
        <h1>Type your thought</h1>
      </label>
      <textarea
        rows="3"
        id="newThought"
        type="text"
        value={newThought}
        onChange={onNewThoughtChange}
        // placeholder=''
      />
      <button type="submit">Send thought!</button>
    </form>
  );
};

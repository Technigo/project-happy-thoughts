import React, { useState } from "react";
import { API_URL } from "../utils/links";

export const NewThought = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

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
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">Type your thought</label>
      <input id="newThought" type="text" value={newThought} onChange={(e) => setNewThought(e.target.value)} />
      <button type="submit">Send thought!</button>
    </form>
  );
};

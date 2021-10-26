import React, { useState } from "react";
import { API_URL } from "../utils/links";

export const NewThought = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("");

  const onButtonClick = (e) => {
    e.preventDefault();
    if (newThought === "") {
      alert("Ops , you forgot to type your thought.");
    } else if (newThought.length <= 4) {
      alert(`Your thought is only ${newThought.length}. Please be more descriptive;)`);
    } else {
      onFormSubmit();
    }
  };

  const onFormSubmit = () => {
    setNewThought("");
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
    <form onSubmit={onButtonClick}>
      <label htmlFor="newThought">Type your thought</label>
      <textarea id="newThought" type="text" placeholder="Share positive vibes" value={newThought} onChange={(e) => setNewThought(e.target.value)} />
      <button type="submit">Send thought!</button>
      <p style={{ color: newThought.length >= 140 ? "red" : "inherit" }}>{newThought.length}</p>
    </form>
  );
};

// onSubmit={onFormSubmit}

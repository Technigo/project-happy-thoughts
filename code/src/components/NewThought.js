import React, { useState } from "react";
import { API_URL } from "../utils/links";

export const NewThought = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState("Share positive vibes");

  const onButtonClick = (e) => {
    if (newThought === "") {
      alert("Ops , you forgot to type your thought.");
    } else if (newThought.length <= 4) {
      alert(`Your thought is only ${newThought.length}. Please be more descriptive;)`);
    } else {
      onFormSubmit(e);
    }
  };

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
    <form>
      <label htmlFor="newThought">Type your thought</label>
      <input id="newThought" type="text" placeholder="Share positive vibes" value={newThought} onChange={(e) => setNewThought(e.target.value)} />
      <button type="submit" onClick={onButtonClick}>
        Send thought!
      </button>
    </form>
  );
};

// onSubmit={onFormSubmit}

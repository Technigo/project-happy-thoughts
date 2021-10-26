import React, { useState } from "react";
import { API_URL } from "utils/urls";

// a form/text-input where you can type a message, a button where you send a post request to send a new message and save that thought in the api.

export const NewThought = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
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
  return (
    <div>
      <form className="newThoughtWrapper" onSubmit={onFormSubmit}>
        {" "}
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
        />
        <button type="submit" className="sendThought">
          <span role="img" aria-label="heart emoji">
            💗
          </span>{" "}
          Send happy thought!{" "}
          <span role="img" aria-label="heart emoji">
            💗
          </span>{" "}
        </button>
      </form>
      ;
    </div>
  );
};

export default NewThought;

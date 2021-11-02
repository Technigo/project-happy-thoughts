import React, { useState } from "react";
import { API_URL } from "utils/urls";
import "./NewThought.css";

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
    <>
      <form className="newThoughtWrapper" onSubmit={onFormSubmit}>
        {" "}
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          maxLength="140"
          onChange={(event) => setNewThought(event.target.value)}
        />
        <p
          className="charactersLeft"
          // the style in line 44 conditions that if the newThought is longer than 130 characters, the text will be red, but if its 130 or less, it will be black. line 46 subtracts the number of characters from the max length, which is 140.
          style={{ color: newThought.length > 130 ? "red" : "black" }}
        >
          {140 - newThought.length} characters left
        </p>
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
    </>
  );
};

export default NewThought;

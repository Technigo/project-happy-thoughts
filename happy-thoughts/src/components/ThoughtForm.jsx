import React, { useState } from "react";

const ThoughtForm = (props) => {
  const [thought, setThought] = useState("");

  const handleFormSubmit = (event) => {
  event.preventDefault();

  fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", { 
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: thought })
  })
    .then((res) => res.json())
    .then((newThought) => props.setThoughts((thoughts) => [newThought, ...thoughts]))
  }

  return (
    <form onSubmit={handleFormSubmit} className="form cards">
      <label htmlFor="thoughtInput">What's making you happy right now?</label>
        <textarea
          type="text" 
          id="thoughtInput"
          name="thought"
          onChange={event => setThought(event.target.value)}
        />
      <button type="submit">
        <span className="icon">❤️ </span> 
          Send Happy Thought 
        <span className="icon"> ❤️</span>
      </button>
    </form>
  );
};

export default ThoughtForm;
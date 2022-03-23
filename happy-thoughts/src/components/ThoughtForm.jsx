import React, { useState } from "react";

const ThoughtForm = (props) => {
  const [newThought, setNewThought] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newThought) => props.setThoughts((thoughts) => [newThought, ...thoughts]))
      .catch(error => console.log("error:", error))
  }

  return (
    <form onSubmit={handleFormSubmit} className="form cards">
      <label htmlFor="thoughtInput">What's making you happy right now?</label>
      <textarea
        type="text"
        id="thoughtInput"
        value={newThought}
        name="thought"
        onChange={event => setNewThought(event.target.value)}
      />
      <div className="button-wrapper">
        <button
          type="submit"
          disabled={newThought.length < 6 || newThought.length > 140}
        >
          <span role="img" aria-label="heart icon">❤️ </span>
          Send Happy Thought
          <span role="img" aria-label="heart icon"> ❤️</span>
        </button>
        <p
          className={(newThought.length < 6 || newThought.length > 140 ? "red-message-length" : "message-length")}>
          {newThought.length}/140
        </p>
      </div>
    </form>
  );
};

export default ThoughtForm;
import React, { useState } from "react";

const ThoughtForm = ({ setThoughts }) => {
  const [newThought, setNewThought] = useState("");
  const [errorMessage, setErrorMessage] = useState({})
  const [error, setError] = useState(false);

  const checkThoughtLength = newThought.length < 6 || newThought.length > 140;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then(res => res.json())
      .then((newThought) => {
        if (newThought.errors) {
          setErrorMessage({
            name: newThought.errors.message.name,
            message: newThought.message,
            path: newThought.errors.message.path,
            type: newThought.errors.message.properties.type,
            propertiesMessage: newThought.errors.message.properties.message,
          })
          setError(true)
          setNewThought("")
        } else {
          setThoughts((thoughts) => [newThought, ...thoughts])
        }
      })
      .catch(error => console.error(error))
      .finally(setNewThought(""))
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form cards">
        <label htmlFor="thoughtInput">What's making you happy right now?</label>
        <textarea
          type="text"
          id="thoughtInput"
          value={newThought}
          name="thought"
          onChange={event => {
            setNewThought(event.target.value)
            setError(false)
          }}
        />
        { error &&
          <ul className="error-message">
            <li>Type of error: {errorMessage.name}</li>
            <li>Message: {errorMessage.message}</li>
            <li>Error occurred at: {errorMessage.path}</li>
            <li>{errorMessage.type}: {errorMessage.propertiesMessage}</li>
          </ul>
        }
        <div className="button-wrapper">
          <button type="submit">
            <span role="img" aria-label="heart icon">❤️ </span>
            Send Happy Thought
            <span role="img" aria-label="heart icon"> ❤️</span>
          </button>
          <p className={(checkThoughtLength ? "red-message-length" : "message-length")}>
            {newThought.length}/140
          </p>
        </div>
      </form>
    </>
  );
};

export default ThoughtForm;
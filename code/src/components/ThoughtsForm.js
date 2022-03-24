import React from "react";

export const ThoughtsForm = ({ newMessages, setNewMessages, onFormSubmit }) => {
  const handleChange = (event) => {
    setNewMessages(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1 className="header-text">What's making you happy right now?</h1>
      <textarea
        className="input"
        type="text"
        value={newMessages}
        onChange={handleChange}
      />
      <button className="form-button" type="submit">
        ❤️ Send Happy Thoughts ❤️
      </button>
    </form>
  );
};

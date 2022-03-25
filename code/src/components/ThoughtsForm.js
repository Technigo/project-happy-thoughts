import React from "react";
import { HeartIcon } from "./HeartIcon";

export const ThoughtsForm = ({ onFormSubmit, setNewMessages, newMessages }) => {
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
        placeholder="Happy thought here"
      />
      <div className="text-container">
        <button
          className="form-button"
          disabled={newMessages.length < 6 || newMessages.length > 140}
          type="submit"
        >
          <HeartIcon symbol="❤️" label="heart" />
          Submit form!
          <HeartIcon symbol="❤️" label="heart" />
        </button>
        <span>{newMessages.length}/140</span>
      </div>
    </form>
  );
};

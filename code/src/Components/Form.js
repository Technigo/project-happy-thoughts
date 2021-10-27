import React from "react";

export const Form = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-container">
        <label htmlFor="newThought">
          <h1>Share something that makes you happy!</h1>
        </label>
        <textarea
          rows="3"
          id="newThought"
          className="message-box"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Share your thoughts!"
        />

        <button className="submit-button" type="submit">
          &#10084;&#65039;Send Happy Thought!&#10084;&#65039;
        </button>
      </div>
    </form>
  );
};

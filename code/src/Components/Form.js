import React from "react";

export const Form = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <section className="input-container">
      <form onSubmit={onFormSubmit}>
        <div className="input-text">
          <label htmlFor="newThought">
            <h1>Type your thought</h1>
          </label>
          <textarea
            rows="3"
            id="newThought"
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
    </section>
  );
};

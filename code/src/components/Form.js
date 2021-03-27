import React from "react";

const Form = ({ messageNew, onNewMessageChange, onFormSubmit }) => {
  return (
    <div className="form-container">
      <form className="thought-form" onSubmit={onFormSubmit}>
        <label className="form-text" htmlFor="newMessage">
          What's making you happy right now?
        </label>
        <input
          className="input-bar"
          id="newMessage"
          rows="3"
          type="text"
          value={messageNew}
          onChange={onNewMessageChange}
        />
        <button className="send-button" type="submit">
          <span
            className="send-heart-emoji"
            role="img"
            aria-label="heart-emoji"
          >
            &#10084;&#65039;
          </span>
          Send Happy Thought
          <span
            className="send-heart-emoji"
            role="img"
            aria-label="heart-emoji"
          >
            &#10084;&#65039;
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;

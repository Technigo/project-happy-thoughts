import React from "react";

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className="form">
      <label htmlFor="newMessage" className="label-message">
        What's making you happy right now?
      </label>
      <input
        id="newMessage"
        type="text"
        value={messageNew}
        onChange={onMessageNewChange}
        className="input-message"
      />
      <button type="submit" className="submit-button">
        <span role="img" aria-label="heart" className="heart-emoji">
          ❤️
        </span>
        Send happy thought{" "}
        <span role="img" aria-label="heart" className="heart-emoji">
          ❤️
        </span>
      </button>
    </form>
  );
};

export default MessageForm;

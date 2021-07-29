import React from "react";

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className="form">
      <label htmlFor="newMessage" className="label-message">
        What's making you happy right now?
      </label>
      <input
        className="input-message"
        id="newMessage"
        type="text"
        value={messageNew}
        onChange={onMessageNewChange}
      />
      <button type="submit" className="submit-button">
        <span role="img" aria-label="heart">
          ❤️
        </span>
        Send happy thought{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </form>
  );
};

export default MessageForm;

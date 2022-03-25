import React from "react";

const NewMessageForm = ({
  newMessage,
  onMessageSubmit,
  onNewMessageSubmit,
}) => {
  return (
    <form onSubmit={onNewMessageSubmit}>
      <label htmlFor="inputform" aria-label="inputform">
      <h1>What's making you happy right now?</h1>
      <textarea value={newMessage} onChange={onMessageSubmit} placeholder="im happy about..."/>
      </label>
      <button type="submit">
      <span role="img" aria-label="Heart-emoji">❤️</span>
      Send Happy Thought<span role="img" aria-label="Heart-emoji">❤️</span></button>
    </form>
  );
};

export default NewMessageForm;

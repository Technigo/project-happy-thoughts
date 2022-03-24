import React from "react";

const NewMessageForm = ({
  newMessage,
  onMessageSubmit,
  onNewMessageSubmit,
}) => {
  return (
    <form onSubmit={onNewMessageSubmit}>
      <h1>What´s making you happy right now?</h1>
      <textarea value={newMessage} onChange={onMessageSubmit} />
      <button type="submit">Send Happy Thought</button>
    </form>
  );
};

export default NewMessageForm;

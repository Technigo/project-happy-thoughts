import React from "react";

export const NewMessage = props => {
  let { newMessage, setNewMessage } = props;

  return (
    <input
      // type="textarea"
      className="newMessage-input"
      value={newMessage}
      placeholder="Add New Happy Thought"
      onChange={event => setNewMessage(event.target.value)}
    />
  );
};

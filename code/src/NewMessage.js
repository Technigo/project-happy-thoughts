import React from "react";
// import { ButtonMessage } from "ButtonMessage";

export const NewMessage = props => {
  let { newMessage, setNewMessage } = props;

  return (
    <div>
      <input
        type="textarea"
        className="newMessage-input"
        minLength={5}
        maxLength={140}
        rows="3"
        value={newMessage}
        placeholder="Add New Happy Thought"
        onChange={event => setNewMessage(event.target.value)}
      />
    </div>
  );
};

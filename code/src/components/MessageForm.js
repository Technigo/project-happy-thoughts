import React from "react";

const MessageForm = ({messageNew, onMessageNewChange, onFormSubmit}) => {
  return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="newMessage">Write a message</label>
            <input
                id="newMessage"
                type="text"
                value={messageNew}
                onChange={onMessageNewChange}
            />
            <button type="submit">send</button>
    </form>
  )
};

export default MessageForm;

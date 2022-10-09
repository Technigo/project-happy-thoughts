import React from 'react';

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="messageForm" onSubmit={onFormSubmit}>
      <h3>What is making you happy right now?</h3>
      <textarea className="textArea" value={newMessage} onChange={onNewMessageChange} />
      <button className="formBtn" type="submit">❤️ Send Happy Thought! ❤️</button>
    </form>
  )
}

export default MessageForm;
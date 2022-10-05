import React from 'react';

const ThoughtsForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="message-container" onSubmit={onFormSubmit}>
      <h1>❤️What's making you happy right now?❤️</h1>
      <textarea placeholder="What's on your mind?" id="sendthougth" value={newMessage} onChange={onNewMessageChange} />
      <button className="submit-btn" type="submit" disabled={newMessage.length < 6 || newMessage.length > 140}>Send a happy thought</button>
    </form>
  )
}

export default ThoughtsForm
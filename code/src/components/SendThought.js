import React from 'react';

const SendMessage = ({ newMessage, onNewMessageChange, onNewMessageSubmit }) => {
  return (
    <div className="message-submit">
      <form onSubmit={onNewMessageSubmit}>
        <h2>What is making you happy right now?</h2>
        <textarea
          rows="3"
          value={newMessage}
          type="text"
          placeholder="My happy thought is..."
          onChange={onNewMessageChange}
          className="text-area" />

        <button
          type="submit"
          disabled={newMessage.length < 6 || newMessage.length > 140}
          className="submit-button">
          ❤️ Send happy thought ❤️
        </button>

      </form>
    </div>
  )
}

export default SendMessage
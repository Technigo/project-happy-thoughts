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

        <p
          className="text-counter"
          // Condition to change text color to red when there are only 10 characters left to reach max
          style={{ color: newMessage.length > 130 ? 'red' : 'black' }}>
          {140 - newMessage.length}/140
        </p>

        <button
          type="submit"
          disabled={newMessage.length < 3 || newMessage.length > 140}
          className="submit-button">
          ❤️ Send happy thought ❤️
        </button>

      </form>
    </div>
  )
}

export default SendMessage
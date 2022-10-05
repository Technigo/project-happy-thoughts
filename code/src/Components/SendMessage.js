/* eslint-disable */
import React from 'react';

const SendMessage = ({ newMessage, handleNewMessageChange, onFormSubmit }) => {
  return (
    <div className="write-message">
      <form onSubmit={onFormSubmit}>
        <h2>What is making you happy right now?</h2>
        <textarea
            value={newMessage}
            type="text"
            placeholder="My happy thought is..."
            onChange={handleNewMessageChange}
            className="text-area" />
        <button 
        type="submit"
        className="send-btn">
          ❤️Send happy thought❤️
        </button>
      </form>
    </div>
  )
}

export default SendMessage
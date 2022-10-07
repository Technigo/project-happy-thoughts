import React from 'react';

export const ThoughtsForm = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  return (

    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-text">What is making you happy right now?</p>
      <textarea placeholder="What's on your mind?" value={newMessage} onChange={handleNewThoughtsChange} />
      <div className="main">
        <button className="submit-btn" type="submit" disabled={newMessage.length < 6 || newMessage.length > 140}>❤️Send a Happy Thought❤️</button>
      </div>
    </form>
  )
}


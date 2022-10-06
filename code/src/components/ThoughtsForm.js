import React from 'react';

export const ThoughtsForm = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  return (

    <form className="message-container" onSubmit={onFormSubmit}>
      <h1>What is making you happy right now?</h1>
      <textarea placeholder="What's on your mind?" id="sendthougth" value={newMessage} onChange={handleNewThoughtsChange} />
      <div className="main">
        <button className="submit-btn" type="submit" disabled={newMessage.length < 6 || newMessage.length > 140}>❤️Send a happy thought❤️</button>
      </div>
    </form>
  )
}


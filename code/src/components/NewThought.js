import React from 'react';

export const NewThoughtsForm = ({ newMessage, handleNewThoughtChange, onFormSubmit }) => {
  return (

    <div className="message-container">
      <form onSubmit={onFormSubmit}>
        <h1>What is making you happy right now?</h1>
        <textarea
          value={newMessage}
          onChange={handleNewThoughtChange}
          placeholder="Let us know your happy thoughts here..."
          maxLength="140" />
        <div className="counter">{0 + newMessage.length} / {140 - newMessage.length} </div>
        <div className="click-button">
          <button className="submit-btn" type="submit" disabled={newMessage.length < 6 || newMessage.length > 140}>❤️Send a Happy Thought❤️</button>
        </div>
      </form>
    </div>
  )
}

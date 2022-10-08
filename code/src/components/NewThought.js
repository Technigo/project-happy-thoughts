import React from 'react';

export const NewThought = ({ newMessage, handleNewMessageChange, onFormSubmit }) => {
  return (

    <form className="message-container" onSubmit={onFormSubmit}>
      <h1>what is making you happy right now?</h1>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Let us know your happy thoughts here..." />
      <button className="submit-btn" type="submit" disabled={newMessage.length < 6 || newMessage.length > 140}>❤️Send a Happy Thought❤️</button>
    </form>
  )
}
import React from 'react';

const NewMessage = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <p>What´s making you happy right now?</p>
      <textarea rows="3" value={newMessage} onChange={onNewMessageChange} />
      <button type="submit">❤️ Send Happy Thought ❤️</button>
    </form>

  )
}

export default NewMessage;
import React from 'react';

const SendMessage = ({ newMessage, onNewMessageChange, setNewMessage }) => {
  return (
    <div className="write-message">
      <form>
        <h2>Write your message here</h2>
        <textarea value={newMessage} onChange={onNewMessageChange} type="text" />
      </form>
      <button type="submit">Send</button>
    </div>
  )
}

export default SendMessage

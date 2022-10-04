import React from 'react';

const SendMessage = ({ newMessage, setNewMessage }) => {
  return (
    <div className="write-message">
      <form>
        <h2>Write your message here</h2>
        <textarea type="text" />
      </form>
      <button type="submit">Send</button>
    </div>
  )
}

export default SendMessage

import React, { useState } from 'react'

export const MessageInput = ({onMessageChange}) => {

  const [newMessage, setNewMessage] = useState('');

  // A submit function which POSTs the text field
  const handleSubmit = event => {
    console.log("Post handleSubmit");
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a happy thought!</h2>
      <textarea
        rows="3"
        className="form-text"
        placeholder="Write your message here"
        value={newMessage}
        onChange={event => setNewMessage(event.target.value)}
      ></textarea>

      <button
        type="submit"
        className="form-button"
        //onClick={handleSubmit}
        disabled={newMessage.length < 6 || newMessage.length > 140}
      > Send a happy thought
      </button>
      <p>{newMessage.length}/140</p>
    </form>
  );
}
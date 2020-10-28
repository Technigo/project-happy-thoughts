import React, { useState } from 'react'

export const MessageInput = () => {
  const MESSAGE_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  // The message state to save the message to send to the backend
  const [message, setMessage] = useState("");

  // 2 do
  // Verify that messages are not empty before we send it - 45:32 van 23 mars
  
  // A submit function which POSTs the text field
  const handleSubmit = event => {
    // Prevent the page from refresh
    event.preventDefault();

    // Send a  POST request using the 'message' state
    fetch(MESSAGE_URL, {
        method: "POST",
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ message })
      })
      .then(()=>{
      // Ask the page to refresh
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post a happy thought!</h2>
      <textarea
        rows="3"
        className="form-text"
        placeholder="Write your message here"
        // value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>

      <button
        type="submit"
        className="form-button"
        onClick={handleSubmit}
        disabled={message.length < 6 || message.length > 140}
      > Send a happy thought
      </button>
      <p>{message.length}/140</p>
    </form>
  );
}
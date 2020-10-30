/* eslint-disable */
import React, { useState } from 'react';
import './messageForm.css';

// A component that takes the prop onMessageChange (the connection to App.js)
// and returns new value - a new message - to App.js.
export const MessageForm = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');
  // The function handleSubmit allows us to control when new data is
  // passed to App.js. We prevent the default action of i.e a form.
  // The function updates App.js with new message.
  // setNewMessage allows us to change the state - add new message.
  // And the empty string clears the input field in the form.
  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage('');
  }

  return (
    <article className="thought-container">
      <form className="happy-form" onSubmit={handleSubmit}>
        <h3>Post a happy thought!</h3>
        <textarea
          rows="3"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)} />
        <div className="form-footer">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!!(newMessage.length < 5 || newMessage.length > 140)}>
            <span className="heart-emoji" role="img" aria-label="heart">❤️</span> Send Happy Thought<span className="heartr-emoji" role="img" aria-label="heart">❤️</span>
          </button>
          <p>{newMessage.length} / 140</p>
        </div>
      </form>
    </article>
  );
};
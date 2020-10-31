import React, { useState } from 'react';

import './messageinput.css';
import ic_send from '../assets/ic_send.svg';



export const MessageInput = ({ onPostMessage }) => {

  const [newMessage, setNewMessage] = useState('')

  // Function called on submit: // Don't reload page on submit.
  const handleSubmit = e => {
    e.preventDefault();
    onPostMessage(newMessage)
    setNewMessage('');
  }

  const handleMessage = event => {
    setNewMessage(event.target.value)
  }

  return (
    <footer className="message-input-container">

      <form className="message-input-content" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What made you happy today?"
          className="message-field"
          value={newMessage}
          onChange={handleMessage}
        >

        </input>
        <button className="button-send-message button-send-message-active"><img src={ic_send} /></button>
      </form>

    </footer>
  )
}
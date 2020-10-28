import React, { useState } from 'react';

import './messageinput.css';
import ic_send from '../assets/ic_send.svg';

export const MessageInput = () => {

  // Function called on submit: // Don't reload page on submit.
  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <footer className="message-input-container">

        <form className="message-input-content" onSubmit={handleSubmit}>
          <input type="text" placeholder="What made you happy today?" className="message-field"></input>
          <button className="btn-message-send"><img src={ic_send}/></button>
        </form>

    </footer>
  )
}
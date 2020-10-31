import React, { useState } from 'react'

import './messageinput.css'
import ic_send from '../assets/ic_send.svg'


export const MessageInput = ({ onPostMessage }) => {

  const [newMessage, setNewMessage] = useState('')



  // Function called on submit: 
  const handleSubmit = e => {
    // Don't reload page on submit.
    e.preventDefault()
    // Posts the message, and resets the input field.
    onPostMessage(newMessage)
    setNewMessage('')

  }

  // A constantly updating function which sets the new message to whatever is in the text input.
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
        <button
          // The second class could be omitted, but keeping it there for when I get back to this project and add better validation.
          className="button-send-message button-send-message-active"
        >
          <img src={ic_send} />
        </button>
      </form>

    </footer>
  )
}
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { SendButton } from 'components/SendButton';

export const ThoughtsInput = (props) => {
  const [message, setMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    props.submitHandler(message)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="inputBox">
        <p>What&apos;s making you happy right now?</p>
        <textarea
          className="inputfield"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="React is making me happy!" />
        <div className="inputbottom">
          <SendButton disabled={message.length < 5 || message.length > 140}>
            {message.length < 5 || message.length > 140 ? 'Please enter a message between 5-140 characters' : '❤️Send a Happy Thought❤️'}
          </SendButton>
          <div className="lengthdisplay">{message.length < 5 || message.length > 140 ? (
            <p className="redtext">{message.length}/140</p>
          ) : (
            <p className="normaltext">{message.length}/140</p>
          )}
          </div>

        </div>
      </div>
    </form>
  )
}
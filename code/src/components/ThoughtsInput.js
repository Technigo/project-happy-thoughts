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
        <p>&apos;Whats making you happy right now?</p>
        <textarea
          className="inputfield"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="React is making me happy!"
          minLength="5"
          maxLength="140" />
        <div className="inputbottom">
          <SendButton />
          <div className="lengthdisplay">{0 + message.length}/140</div>
        </div>

      </div>
    </form>
  )
}
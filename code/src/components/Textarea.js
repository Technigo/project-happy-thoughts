import React from 'react'

export const Textarea = ({ message, setMessage }) => {
  return (
    <label>
      What's making you happy right now?

      <textarea
        className={(message.length < 5 || message.length > 140) && 'error'}
        onChange={(event) => { setMessage(event.target.value) }}
        value={message}
      ></textarea>
    </label>
  )
}
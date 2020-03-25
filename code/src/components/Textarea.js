import React from 'react'

export const Textarea = ({ message, setMessage, checkMessageLength }) => {
  return (
    <label>
      What's making you happy right now?

      <textarea
        className={checkMessageLength ? 'error' : ''}
        onChange={(event) => { setMessage(event.target.value) }}
        value={message}
      ></textarea>
    </label>
  )
}
import React from 'react'

export const Textarea = ({ message, setMessage, checkMessageLength }) => {
  return (
    <label>
      What's making you happy right now?

      <textarea
        className={checkMessageLength ? 'error' : '' /* Add error class if characters are not between 5 – 140 */}
        onChange={(event) => { setMessage(event.target.value) }}
        value={message}
      ></textarea>
    </label>
  )
}
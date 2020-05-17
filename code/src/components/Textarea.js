import React from 'react'

export const Textarea = ({ message, setMessage, checkLength }) => {
  return (
    <label>
      What's making you happy right now?

      <textarea
        className={checkLength ? 'error' : '' /* Add error class if characters are not between 5 – 140 */}
        onChange={(event) => { setMessage(event.target.value) }}
        value={message} />
    </label>
  )
}
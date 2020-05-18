import React from 'react'

export const Textarea = ({ message, setMessage, checkLength }) => {
  return (
    <textarea
      className={checkLength ? 'error' : '' /* Add error class if characters are not between 5 – 140 */}
      onChange={(event) => { setMessage(event.target.value) }}
      value={message}
      placeholder="Share a thought"
      aria-label="Share a thought" />
  )
}
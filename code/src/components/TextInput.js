import React from 'react'

export const TextInput = ({ name, setName, checkLength }) => {
  return (
    <input
      type="text"
      className={checkLength ? 'error' : '' /* Add error class if not desired length0 */}
      onChange={(event) => { setName(event.target.value) }}
      value={name}
      placeholder="Your name"
      aria-label="Your name" />
  )
}
import React from 'react'

export const NewThought = ({ onChange }) => {
  return (
    <label>
      <h2>What's making you happy right now?</h2>
      <textarea
        minLength="5"
        maxLength="140"
        rows="2"
        onChange={onChange} />
    </label>
  )
}
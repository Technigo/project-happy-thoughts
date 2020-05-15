import React from 'react'
import './name.css'

export const Name = ({ value, onChange }) => {
  return (
    <label>
      <h2 className="thought-name">Who's happy?</h2>
      <textarea className="text-field"
        placeholder="Enter name (optional)"
        minLength="1"
        maxLength="15"
        rows="1"
        value={value}
        onChange={onChange} />
    </label>
  )
}
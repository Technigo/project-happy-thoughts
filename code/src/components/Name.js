import React from 'react'
import './name.css'

export const Name = ({ value, onChange }) => {
  return (
    <label>
      <h2 className="thought-name">Hello...</h2>
      <textarea className="name-field"
        placeholder="Enter name (optional)"
        maxLength="14"
        rows="1"
        value={value}
        onChange={onChange} />
    </label>
  )
}
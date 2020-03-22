import React from 'react'
import './newthought.css'

export const NewThought = ({ onChange }) => {
  return (
    <label>
      <h2 className="thought-question">What's making you happy right now?</h2>
      <textarea className="text-field"
        minLength="5"
        maxLength="140"
        rows="3"
        onChange={onChange} />
    </label>
  )
}
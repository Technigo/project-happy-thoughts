import React from 'react'
import './newthought.css'

export const NewThought = ({ value, onChange, newThought }) => {
  return (
    <label>
      <div className="thought-question-container">
        <h2 className="thought-question">What's making you happy right now?</h2>
        <p className="word-counter">{newThought.length}/140</p>
      </div>
      <textarea className="text-field"
        minLength="5"
        maxLength="140"
        rows="3"
        value={value}
        onChange={onChange} />
    </label>
  )
}
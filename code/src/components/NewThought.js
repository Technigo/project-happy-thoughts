import React from 'react'
import './newthought.css'

export const NewThought = ({ value, onChange, name }) => {
  let userName
  if (name) {
    userName = name
  } else {
    userName = 'you'
  }

  return (
    <label>
      <h2 className="thought-question">What's making {userName} happy right now?</h2>
      <textarea className="text-field"
        minLength="5"
        maxLength="140"
        rows="3"
        value={value}
        onChange={onChange} />
    </label>
  )
}
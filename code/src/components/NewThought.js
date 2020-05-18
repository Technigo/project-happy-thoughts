import React from 'react'
import './newthought.css'

export const NewThought = ({ value, onChange, thoughtQ, maxLength, rowNo }) => {
  return (
    <label>
      <h2 className="thought-question">{thoughtQ}</h2>
      <textarea className="text-field"
        minLength="5"
        maxLength={maxLength ? maxLength : "140"}
        rows={rowNo ? rowNo : "3"}
        value={value}
        onChange={onChange} />
    </label>
  )
}
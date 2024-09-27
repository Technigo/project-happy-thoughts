import React, { useEffect, useState } from 'react'

export const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    if (newThought.length < 5 || newThought.length > 140) {
      setTextColor('red')
    } else { setTextColor('black') }
  }, [newThought, textColor])

  return (
    <form className="submit-form" onSubmit={onFormSubmit}>
      <h2 className="question"> What&#39;s making you happy right now? </h2>
      <textarea
        className="text-area"
        style={{ color: `${textColor}` }}
        value={newThought}
        onChange={onNewThoughtChange}
        placeholder="Type your happy thought here.." />

      <div className="counter">
        <span className={newThought.length > 140}>
          {newThought.length}
        </span>/140
      </div>

      <button
        className="submit-button"
        type="submit"
        disabled={newThought.length < 5 || newThought.length > 140}>
        <span className="hearts">❤️</span>Send Happy Thought!<span className="hearts">❤️</span>
      </button>
    </form>
  )
}
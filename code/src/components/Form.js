import React from 'react'

export const Form = ({onFormSubmit, messageNew, onMessageNewChange }) => {
  return (
  <form onSubmit={onFormSubmit} className="form">
    <label>
      <h3>What's making you happy right now?</h3>
      <textarea
        rows="3"
        value={messageNew}
        onChange={onMessageNewChange}
      />
    </label>
    <p className={`${messageNew.length <= 141 ? 'too-long' : ''}`}>
      Your thought is too long!💭
    </p>
    <p className={`${messageNew.length >= 5 ? 'too-short' : ''}`}>
      Type at least 5 characters💭
    </p>
    <p className={`${140-messageNew.length <= 0 ? 'counter' : ''}`}>
      Remaining characters: <span>{140-messageNew.length}</span> ✍ 
    </p>
    <button type="submit">💓Send Happy Thought!💓</button>
  </form>
  )
}
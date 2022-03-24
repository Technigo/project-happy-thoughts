import React from 'react'

export const Form = ({
  newThought,
  onNewThoughtChange,
  onFormSubmit,
  counter
}) => {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className="input-container">
          <label htmlFor="newThought">
            <h1>What makes you happy?</h1>
          </label>
          <textarea
            className={
              counter < 6 || counter > 140 ? 'disabled-textarea' : 'textarea'
            }
            rows="3"
            id="newThought"
            type="text"
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder="Minimum 6 characters and maximum 140 characters"
          />

          <p className="characters-left">
            {140 - counter} / 140 characters left
          </p>

          <button
            className="submit-button"
            type="submit"
            disabled={newThought.length < 6 || newThought.length > 140}
          >
            <p>Send Happy Thought</p>
          </button>
        </div>
      </form>
    </>
  )
}

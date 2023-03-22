/* eslint-disable no-shadow */
import React from 'react';

// the component that handles the message that the user can add
const NewThoughts = ({ count, newThoughts, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="thought-container">
      <form onSubmit={onFormSubmit} className="new-thought-box">
        <p className="new-thought">What´s making you happy right now?</p>
        <textarea
          className="text-area"
          style={{
            color: count <= 5 || count > 140 ? 'red' : ''
          }}
          placeholder="Type your thoughts here..."
          value={newThoughts}
          onChange={onNewThoughtChange} />
        <p
          className="counter"
          // Makes the text of the character-counter red if
          style={{
            color: count <= 5 || count > 140 ? 'red' : ''
          }}>
          {count}/140
        </p>
        <button
          type="submit"
          className="submit-Btn"
          // Makes the button un-clickable if it's
          // less than 1 or more than 140 characters
          disabled={newThoughts.length < 5 || newThoughts.length > 140}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>

  )
}

export default NewThoughts;
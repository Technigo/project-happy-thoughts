/* eslint-disable no-shadow */
import React from 'react';
import './newThoughts.css';

const NewThoughts = ({ count, newThoughts, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="thought-container">
      <form onSubmit={onFormSubmit} className="new-thought-box">
        <p className="new-thought">What´s making you happy right now?</p>
        <textarea
          className="text-area"
          rows="4"
          cols="40"
          style={{
            color: count <= 5 || count > 140 ? 'red' : ''
          }}
          placeholder="Type your thoughts here..."
          value={newThoughts}
          onChange={onNewThoughtChange} />
        <p
          className="counter"
          style={{
            color: count <= 5 || count > 140 ? 'red' : ''
          }}>
          {count}/140
        </p>
        <button
          type="submit"
          className="submit-Btn"
          disabled={newThoughts.length < 5 || newThoughts.length > 140}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>

  )
}

export default NewThoughts;
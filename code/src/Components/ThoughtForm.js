/* eslint-disable*/
import React from 'react';

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {

  return (
    <div className="thoughtForm-container">
      <form onSubmit={onFormSubmit}>
        <div className="thought-form">
          <h2 className="thought-form-header">
            <label htmlFor="thoughtInput">What makes you happy right now?</label>
          </h2>
          <textarea
            id="thoughtInput"
            className="text-input"
            rows="5"
            columns="140"
            placeholder="Type something...:)"
            type="text"
            name="thought"
            maxLength="140"
            value={newThought}
            onChange={setNewThought} />
        </div>
        <div className="thought-input-details">
          <button
            className="submitBtn"
            type="button"
            disabled={newThought.length < 5 || newThought.length > 140}>
            <span>❤️Send Happy Thought❤️</span>
          </button>
          <div className="counter">
            <p>{0 + newThought.length} / 140</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ThoughtForm
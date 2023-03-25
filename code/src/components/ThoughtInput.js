/* eslint-disable max-len */
import React from 'react';

export const ThoughtInput = ({ eachThought, onEachThoughtChange, onFormSubmit }) => {
  return (
    <form className="thoughtInput" onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea
        value={eachThought}
        onChange={onEachThoughtChange}
        placeholder="React is making me happy!" />
      <div className="characterCount">{eachThought.length < 5 || eachThought.length > 140 ? (
        <p className="redText">{eachThought.length}/140</p>
      ) : (
        <p className="normalText">{eachThought.length}/140</p>
      )}
      </div>
      <button className="submitButton" type="submit">
        <span role="img" aria-label="heart">❤️ </span>
        <span className="submitButtonText">Send happy thought!</span>
        <span role="img" aria-label="heart"> ❤️</span>
      </button>
    </form>
  )
}
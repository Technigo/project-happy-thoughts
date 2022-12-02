import React from 'react';
// import React, { useState, useEffect } from 'react';

export const ThoughtForm = ({
  newThought,
  onNewThoughtChange,
  onFormSubmit,
  onThoughtLikeChange
}) => {
  return (
    <div className="thought-wrapper gray-bg">
      <form onSubmit={onFormSubmit} className="thought-form">
        <label htmlFor="thought-input" className="post-thought-question">
          What´s making you happy right now?
          <input />
        </label>
        <textarea
          id="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Type your thoughts here..."
          required
          minLength="5"
          maxLength="140" />
        <p className="add-thought-word-count">
          {/* {`${textColor}`} */}
          {newThought.length} / 140
        </p>
        <button
          type="submit"
          className="submit-btn"
          onChange={onThoughtLikeChange}>
          <span className="heart" role="img" aria-label="heart symbol" />
          ❤️ Send Happy Thoughts! ❤️
          <span className="heart" role="img" aria-label="heart symbol" />
        </button>
      </form>
    </div>
  );
}
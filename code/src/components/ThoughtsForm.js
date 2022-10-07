/* eslint-disable comma-dangle */
import React from 'react';

export const ThoughtsForm = ({
  newThought,
  onNewThoughtChange,
  onThoughtPost,
}) => {
  return (
    <div className="input-wrapper">
      <form className="form-container" onSubmit={onThoughtPost}>
        <h2>Whats making you happy right now?</h2>
        <textarea
          rows="5"
          value={newThought}
          onChange={onNewThoughtChange}
          required
          placeholder="Write a happy thought here">
          Text here
        </textarea>
        <p className="text-counter">{newThought.length}/140</p>
        <button
          type="submit"
          className="post-button"
          value="Post btn"
          disabled={newThought.length < 6 || newThought.length > 140}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

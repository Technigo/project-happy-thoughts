/* eslint-disable comma-dangle */
import React from 'react';

export const ThoughtsForm = ({
  newThought,
  onNewThoughtChange,
  onFormSubmit,
}) => {
  return (
    <div className="input-wrapper">
      <form className="form-container" onSubmit={onFormSubmit}>
        <h2>Send happy thoughts!</h2>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          minLength="4"
          maxLength="140"
          required
          placeholder="Write a happy thought here">
          Text here
        </textarea>
        <p className="textCounter">{newThought.length}/140</p>
        <button type="submit" className="post-button" value="Post btn">
          Post
        </button>
      </form>
    </div>
  );
};

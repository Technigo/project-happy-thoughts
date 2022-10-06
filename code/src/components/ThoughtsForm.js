/* eslint-disable comma-dangle */
import React from 'react';

export const ThoughtsForm = ({
  newThought,
  onNewThoughtChange,
  onFormSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2>Send happy thoughts!</h2>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Write a happy thought here">
          Text here
        </textarea>
        <button type="submit" className="post-button" value="Post btn">
          Post
        </button>
      </form>
    </div>
  );
};

import React from 'react';

const NewThoughtInput = ({
  onFormSubmit,
  onNewThoughtsInputChange,
  newThought,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        What's making you happy right now?
        <input
          type="text"
          value={newThought}
          onChange={onNewThoughtsInputChange}
        />
        <button type="submit">
          <span role="img" aria-label="heart">
            ❤️
          </span>
          Send Happy Thought
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
      </label>
    </form>
  );
};

export default NewThoughtInput;

import React from 'react';

const NewThoughtInput = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        What's making you happy right now?
        <input
          type="text"
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)} // skapa function (se förra veckan!)
        />
        <button
          disabled={newThought.length < 5 || newThought.length > 140}
          type="submit"
        >
          <span role="img" aria-label="heart">
            ❤️&emsp;
          </span>
          Send Happy Thought
          <span role="img" aria-label="heart">
            &ensp;❤️
          </span>
        </button>
      </label>
    </form>
  );
};

export default NewThoughtInput;

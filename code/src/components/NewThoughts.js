import React from 'react';

// creating a thought

const NewThoughts = ({
  newThoughts,
  onNewThoughtsChange,
  handleFormSubmit,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='thoughts-message'>
        <label>What`s making you happy right now?</label>
        <textarea value={newThoughts} onChange={onNewThoughtsChange} />
        <button type='submit'>Send Happy Thought</button>
      </div>
    </form>
  );
};

export default NewThoughts;

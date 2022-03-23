import React from 'react';

const ThoughtsInput = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className='inputForm' onSubmit={onFormSubmit}>
      <div className='newThoughtContainer'>
        <label className='input-label'>
          What's making you happy right now?
        </label>
        <div className='inputMessageContainer'>
          <input
            type='text'
            className='inputMessage'
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)}
          />
        </div>
      </div>
      <div className='buttonContainer'>
        <button
          className='sendButton'
          type='submit'
          disabled={newThought.length < 5 || newThought.length > 140}
        >
          Send happy thought!
        </button>
      </div>
    </form>
  );
};
export default ThoughtsInput;

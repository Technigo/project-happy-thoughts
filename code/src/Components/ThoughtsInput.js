import React from 'react';

const ThoughtsInput = ({ onFormSubmit, newThought, setNewThought }) => {
  const redCharacters = () => {
    return newThought.length > 140 ? (
      <p style={{ color: 'red' }}>
        <p style={{ color: 'red' }}>{140 - newThought.length}/140</p>
      </p>
    ) : (
      <p style={{ color: 'black' }}>
        <p style={{ color: 'black' }}>{140 - newThought.length}/140</p>
      </p>
    );
  };
  return (
    <form className='inputForm' onSubmit={onFormSubmit}>
      <div className='newThoughtContainer'>
        <label className='input-label'>
          What's making you happy right now?
        </label>
        <textarea
          type='text'
          className='inputMessage'
          value={newThought}
          onChange={(event) => setNewThought(event.target.value)}
          rows='4'
          cols='30'
        />
        <div className='buttonContainer'>
          <button
            className='sendButton'
            type='submit'
            disabled={newThought.length < 5 || newThought.length > 140}
          >
            <span aria-label='heart' role='img' className='heartButtonIcon'>
              ❤️
            </span>{' '}
            Send Happy Thought!{' '}
            <span aria-label='heart' role='img' className='heartButtonIcon'>
              ❤️
            </span>
          </button>
          <p className='characters'>{redCharacters()}</p>
        </div>
      </div>
    </form>
  );
};
export default ThoughtsInput;

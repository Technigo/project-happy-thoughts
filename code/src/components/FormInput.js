import React from 'react';

import CharCount from './CharCount';

const FormInput = ({ newThought, onThoughtsChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className='form-container'>
      <label htmlFor='newThought'>What makes you happy right now?</label>
      <textarea
        id='newThought'
        onChange={onThoughtsChange}
        className='text-input'
        value={newThought}
        autoComplete='off'
        rows='3'
        cols='30'
        placeholder='Write your happy thought here'
        required
      />
      <div className='btn-counter-container'>
        <button
          type='submit'
          className='share-button'
          disabled={newThought.length < 5 || newThought.length > 140}
        >
          <span className='btn-heart' role='img' aria-label='heart'>
            ❤️
          </span>
          <span className='btn-text'>Send happy thought</span>
          <span className='btn-heart' role='img' aria-label='heart'>
            ❤️
          </span>
        </button>
        <CharCount messageLength={newThought.length} />
      </div>
    </form>
  );
};

export default FormInput;

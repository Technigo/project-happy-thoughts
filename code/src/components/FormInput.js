import React from 'react';
// import { API_URL } from '../utils/urls';

const FormInput = ({ newThought, onThoughtsChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className='form-container'>
      <label htmlFor='newThought'>What makes you happy right now?</label>
      <textarea
        id='newThought'
        onChange={onThoughtsChange}
        className='text-input'
        value={newThought} //I need this to clear the input... why?
        autoComplete='off'
        rows='3'
        cols='30'
        placeholder='Write your happy thought here'
        required
      />
      <button
        type='submit'
        className='share-button'
        disabled={newThought.length < 5 || newThought.length > 140}
      >
        <span className='btn-heart' role='img' aria-label='heart'>
          ❤️
        </span>
        <span>Send happy thought</span>
        <span className='btn-heart' role='img' aria-label='heart'>
          ❤️
        </span>
      </button>
    </form>
  );
};

export default FormInput;

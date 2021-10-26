import React, { useState } from 'react';
import { API_URL } from '../utils/urls';

const FormInput = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('');

  //   console.log(newThought);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts], setNewThought('')));
  };

  return (
    <form onSubmit={onFormSubmit} className='form-container'>
      <label htmlFor='newThought'>What makes you happy right now?</label>
      <textarea
        id='newThought'
        onChange={(event) => setNewThought(event.target.value)}
        className='text-input'
        value={newThought} //I need this to clear the input... why?
        autoComplete='off'
        rows='3'
        cols='30'
        placeholder='Write your happy thought here'
        minLength='5'
        maxLength='140'
        required
      />
      <button type='submit' className='share-button'>
        <span className='btn-heart'>❤️</span>
        <span>Send happy thought</span>
        <span className='btn-heart'>❤️</span>
      </button>
    </form>
  );
};

export default FormInput;

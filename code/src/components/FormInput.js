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
      .then((data) => setThoughts([data, ...thoughts]));
    // newThought = ''; How to make the input field blank after submitting
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='newThought'>What makes you happy right now?</label>
      <input
        id='newThought'
        type='text'
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
      />
      <button type='submit'>Share</button>
    </form>
  );
};

export default FormInput;

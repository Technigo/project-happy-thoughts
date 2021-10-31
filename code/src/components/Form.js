import React, { useState } from 'react';

const Form = ({ fetchThoughtList, API_URL }) => {
  const [newThought, setNewThought] = useState('');
  const [counter, setCounter] = useState(0);

  const remainingCharacters = 140 - counter;

  const handleNewThoughtChange = (e) => {
    setNewThought(e.target.value);
    setCounter(e.target.value.length);
  };

  //   form submitted
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };
    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => fetchThoughtList())
      .catch((err) => console.error(err));
    setNewThought('');
    setCounter(0);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='newThought'>
        What makes you happy right now?
        <textarea
          className={
            counter < 6 || counter > 140 ? 'disabled-textarea' : 'textarea'
          }
          rows={3}
          id={newThought}
          type='text'
          maxLength={140}
          value={newThought}
          onChange={handleNewThoughtChange}
          placeholder='Minimum 6 characters and maximum 140 characters'
        />
      </label>
      <p className='characters-left'>
        {remainingCharacters < 0 ? 0 : remainingCharacters}/ 140 characters left
      </p>
      <button
        type='submit'
        className='submit-button'
        disabled={newThought.length < 6 || newThought.length > 140}
      >
        Send thought!
      </button>
    </form>
  );
};

export default Form;

import React, { useEffect, useState } from 'react';

const FormInput = () => {
  const [newThought, setNewThought] = useState('');

  //   console.log(newThought);

  const onFormSubmit = (event) => {
    event.preventDefault();

    // console.log('Form submitted', newThought);
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

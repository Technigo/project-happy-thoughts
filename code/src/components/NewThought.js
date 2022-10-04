import React, { useState } from 'react';

const NewThought = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    };

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
  };
  return (
    <form onSubmit={onFormSubmit}>
      <textarea id="newThought" type="text" value={newThought} onChange={(event) => setNewThought(event.target.value)} />
      <button type="submit">Send happy thought</button>
    </form>
  )
}
export default NewThought
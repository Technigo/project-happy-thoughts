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
    <div className="new-thought-box">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What is making you happy right now?
          <textarea
            id="newThought"
            type="text"
            value={newThought}
            maxLength="140"
            onChange={(event) => setNewThought(event.target.value)} />
          <p className="charactersLeft" style={{ color: newThought.length > 130 ? 'red' : 'black' }}>{newThought.length}/140</p>
          <button type="submit" className="new-thought-button"><span>💗</span> Send Happy Thought <span>💗</span></button>
        </label>
      </form>
    </div>
  )
}
export default NewThought
import React, { useState } from 'react';
import styles from './ThoughtForm.module.css';

const ThoughtForm = ({ setThoughtsFeed }) => {
  const [thought, setThought] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: thought }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((newThought) => {
        console.log(newThought)
        setThoughtsFeed((previousThoughts) => [newThought, ...previousThoughts])
      })
      .catch((error) => console.error(error))
      .finally(setThought(''))
  };

  return (
    <div className={styles.thoughtFormContainer}>
      <form onSubmit={handleFormSubmit} className={styles.thoughtForm}>
        <label className={styles.thoughtFormHeading} htmlFor="thought-input">
          What´s making you happy right now?
          <textarea id="thought-input" value={thought} onChange={(event) => setThought(event.target.value)} maxLength="140" placeholder="Type thoughts..." required />
        </label>
        <button type="submit" className={styles.sendButton}>❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
};

export default ThoughtForm;

import React, { useState } from 'react';
import styles from './ThoughtForm.module.css';

const ThoughtForm = ({ setThoughtsFeed }) => {
  const [thought, setThought] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleKeyPress = (addOrDel) => {
    if (addOrDel) {
      setCharCount(charCount + 1);
    } else if (!addOrDel) {
      setCharCount(charCount - 1);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      body: JSON.stringify({ message: thought }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((newThought) => {
        setThoughtsFeed((previousThoughts) => [newThought, ...previousThoughts])
      })
      .finally(setThought(''), setCharCount(0))
  };

  return (
    <div className={styles.thoughtFormContainer}>
      <form onSubmit={handleFormSubmit} className={styles.thoughtForm}>
        <label htmlFor="thought-input" className={styles.thoughtFormHeading}>
          What´s making you happy right now?
          <textarea
            id="thought-input"
            value={thought}
            onChange={(event) => setThought(event.target.value)}
            onKeyDown={8 ? () => handleKeyPress(false) : () => handleKeyPress(true)}
            placeholder="Type thoughts..." />
        </label>
        <button
          disabled={thought.length < 6 || thought.length > 140}
          type="submit"
          className={styles.sendButton}><span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
        </button>
        <p>{charCount}</p>
      </form>
    </div>
  );
};

export default ThoughtForm;

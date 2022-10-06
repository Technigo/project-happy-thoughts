import React, { useState } from 'react';
import styles from './ThoughtForm.module.css';

const ThoughtForm = ({ setThoughtsFeed }) => {
  const [thought, setThought] = useState('');
  const maxChars = 140;
  const [remainingChars, setRemainingChars] = useState(maxChars);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setThought(input);
    setRemainingChars(maxChars - input.length);
  };

  const handleInputCleanup = () => {
    setThought('');
    setRemainingChars(maxChars);
  };

  /*   const handleButtonClick = () => {
    if (thought.length < 5) {
      alert('Your message must be at least 5 characters ☺️');
    }
  }; */

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
        if (newThought.message === 'Could not save thought') {
          alert('Your message must be at least 5 characters ☺️');
          console.log(newThought.message)
        } else {
          setThoughtsFeed((previousThoughts) => [newThought, ...previousThoughts])
        }
      })
      .finally(handleInputCleanup);
  };

  return (
    <div className={styles.thoughtFormContainer}>
      <form onSubmit={handleFormSubmit} className={styles.thoughtForm}>
        <label htmlFor="thought-input">
          <h1 className={styles.thoughtFormHeading}>What&apos;s making you happy right now?</h1>
          <textarea
            id="thought-input"
            maxLength={maxChars}
            onChange={handleInputChange}
            placeholder="Type thoughts..."
            value={thought} />
        </label>
        <div className={styles.sendButtonAndCharsContainer}>
          <button
            disabled={thought.length > 140}
            className={styles.sendButton}
            // onClick={handleButtonClick}
            type="submit"><span role="img" aria-label="heart">❤️</span>Send Happy Thought <span role="img" aria-label="heart">❤️</span>
          </button>
          <p className={remainingChars > 135 ? styles.notEnoughChars : styles.remainingChars}>
            {remainingChars}<span className={styles.remainingChars}> / 140</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ThoughtForm;

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

  const handleButtonClick = () => {
    if (thought.length < 5) {
      alert('You have to type something first ^_^')
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
        if (newThought.message === 'Could not save thought') {
          alert(newThought.message)
        } else {
          setThoughtsFeed((previousThoughts) => [newThought, ...previousThoughts])
        }
      })
      .finally(handleInputCleanup);
  };

  return (
    <div className={styles.thoughtFormContainer}>
      <form onSubmit={handleFormSubmit} className={styles.thoughtForm}>
        <label htmlFor="thought-input" className={styles.thoughtFormHeading}>
          What´s making you happy right now?
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
            onClick={handleButtonClick}
            type="submit"><span role="img" aria-label="heart">❤️</span>Send Happy Thought <span role="img" aria-label="heart">❤️</span>
          </button>
          <p className={styles.remainingChars}>
            <span className={window.innerWidth > 720 ? styles.charsLeft : styles.hide}>
              Characters left:
            </span>
            {remainingChars}
          </p>
        </div>
      </form>
    </div>
  );
};

export default ThoughtForm;

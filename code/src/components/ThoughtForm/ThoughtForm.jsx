import React, { useState } from 'react';
import styles from './ThoughtForm.module.css';

const ThoughtForm = ({ setThoughtsFeed }) => {
  // State for dealing with new thoughts posted
  // with the form further down
  const [thought, setThought] = useState('');

  // for handling when a message is too short to be posted
  const [tooShortThought, setTooShortThought] = useState('');

  // these things are for the character countdown
  const maxChars = 140;
  const [remainingChars, setRemainingChars] = useState(maxChars);

  // Two things had to be handled when the textarea input changes:
  // On form submit the input value/thought state
  // will be used in the POST request further down.
  // But since it's an onChange event it's also used for
  // counting down characters left while something is being typed in.
  // That's why I put both of these things in the same function.
  const handleInputChange = (event) => {
    const input = event.target.value;
    setThought(input);
    setRemainingChars(maxChars - input.length);
    if (remainingChars < 135) {
      setTooShortThought('');
    }
  };

  const handleTooShortThought = () => {
    if (thought.length < 5) {
      setTooShortThought('Too short! ☺️');
    }
  };

  // A function for empyting the textarea input after post request is done
  // and resetting the remaining character counter to 140
  const handleInputCleanup = () => {
    setThought('');
    setRemainingChars(maxChars);
  };

  // Post request when clicking the send-button in the form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      // When posting to the api the format must be "converted" to
      // something the works for the api (JSON in our case),
      // so that's being done here:
      body: JSON.stringify({ message: thought }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then((newThought) => {
        if (newThought.message === 'Could not save thought') {
          handleTooShortThought(newThought.message);
        } else {
          setThoughtsFeed((previousThoughts) => [newThought, ...previousThoughts])
        }
      })
      .finally(handleInputCleanup);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.thoughtForm}>
      <label htmlFor="thought-input">
        <h1 className={styles.thoughtFormHeading}>What&apos;s making you happy right now?</h1>
        <textarea
          id="thought-input"
          maxLength={maxChars}
          onChange={handleInputChange}
          placeholder="Type happy thought..."
          value={thought} />
      </label>
      <div className={styles.sendButtonAndCharsContainer}>
        <button
          // no real need to disable the button since
          // the maxLength of the textarea is set to 140
          disabled={thought.length > 140}
          className={styles.sendButton}
          // onClick={handleButtonClick}
          type="submit"><span role="img" aria-label="heart">❤️</span>Send Happy Thought <span role="img" aria-label="heart">❤️</span>
        </button>
        {/* if you haven't typed 5 or more characters the counter will be red, else gray */}
        <div className={styles.charsAndTooShortContainer}>
          <p className={remainingChars > 135 ? styles.notEnoughChars : styles.remainingChars}>
            {remainingChars}<span className={styles.remainingChars}> / 140</span>
          </p>
          <p className={styles.tooShort}>{tooShortThought}</p>
        </div>
      </div>
    </form>
  );
};

export default ThoughtForm;

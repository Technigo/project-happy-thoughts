import React, { useState } from 'react';
import styles from './ThoughtForm.module.css';

const ThoughtForm = ({ setThoughtsFeed }) => {
  // State for dealing with new thoughts posted
  // with the form further down
  const [thought, setThought] = useState('');

  // these things are for the character countdown
  const maxChars = 140;
  const [remainingChars, setRemainingChars] = useState(maxChars);

  // Since two things had to be handled when the textarea input changes:
  // The actual input value/thought state will be set
  // and used in the POST request further down.
  // And also the counting down the characters being typed in
  // That's why I put both of these things in the same function.
  const handleInputChange = (event) => {
    const input = event.target.value;
    setThought(input);
    setRemainingChars(maxChars - input.length);
  };

  // A function for empyting the textarea input after post request is done
  // and resetting the remaining character counter to 140
  const handleInputCleanup = () => {
    setThought('');
    setRemainingChars(maxChars);
  };

  /*   const handleButtonClick = () => {
    if (thought.length < 5) {
      alert('Your message must be at least 5 characters ☺️');
    }
  }; */

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
          alert('Your message must be at least 5 characters ☺️');
          console.log(newThought.message)
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
          placeholder="Type thoughts..."
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
        <p className={remainingChars > 135 ? styles.notEnoughChars : styles.remainingChars}>
          {remainingChars}<span className={styles.remainingChars}> / 140</span>
        </p>
      </div>
    </form>
  );
};

export default ThoughtForm;

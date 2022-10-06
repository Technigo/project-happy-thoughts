import { Card } from 'components/Card';
import React from 'react';
import styles from './CreateThought.module.css';

const CreateThoughts = ({ newThought, setNewThought, fetchThoughts }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    };

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((res) => res.json())
      .then(() => fetchThoughts())
      .finally(() => setNewThought(''));
  };

  const handleChange = (event) => {
    setNewThought(event.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <h1>What&apos;s making you happy right now?</h1>
        <textarea
          className={styles.textarea}
          value={newThought}
          onChange={handleChange}
        />

        <button className={styles.button} type="submit">
          &#10084; Send Happy Thought &#10084;
        </button>
      </form>
    </Card>
  );
};

export default CreateThoughts;

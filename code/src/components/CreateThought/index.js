import { Card } from 'components/Card';
import { createThought } from 'lib/api';
import React from 'react';
import styles from './CreateThought.module.css';

const CreateThoughts = (props) => {
  const onFormSubmit = (event) => {
    event.preventDefault();

    createThought(props.newThought)
      .then(() => props.fetchThoughts())
      .finally(() => props.setNewThought(''));
  };

  const handleChange = (event) => {
    props.setNewThought(event.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <h1 className={styles.h1}>What&apos;s making you happy right now?</h1>
        <textarea
          placeholder="Happy thoughts here..."
          className={styles.textarea}
          value={props.newThought}
          onChange={handleChange}
        />

        <button className={styles.button} type="submit">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </Card>
  );
};

export default CreateThoughts;

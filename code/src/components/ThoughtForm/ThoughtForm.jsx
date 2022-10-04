import React from 'react';
import styles from './ThoughtForm.module.css';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className={styles.sendThoughtContainer}>
      <form className={styles.sendThoughtForm} action="post">
        <label htmlFor="happy-thoughts">What´s making you happy right now?
          <textarea id="happy-thoughts" value={newThought} onChange={onNewThoughtChange} />
        </label>
        <button type="submit" className={styles.sendButton}>❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
};

export default ThoughtForm;

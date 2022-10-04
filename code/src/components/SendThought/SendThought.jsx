import React from 'react';
import styles from './SendThought.module.css';

export const SendThought = () => {
  return (
    <div className={styles.sendThoughtContainer}>
      <form className={styles.sendThoughtForm} action="post">
        <label htmlFor="happy-thoughts">What´s making you happy right now?
          <textarea id="happy-thoughts" name="happy-thoughts" />
        </label>
        <button type="submit" className={styles.sendButton}>❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
};

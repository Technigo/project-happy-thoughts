import React from "react";
import styles from "./TaskForm.module.css";

const TaskForm = ({ newTextChange, newText, handleFormSubmit }) => {
  return (
    <section className={styles.sectionForm}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <h2>Submit your thoughts below!</h2>
        <textarea
          value={newText}
          onChange={newTextChange}
          placeholder="... make me Happy! "
        ></textarea>
        <button type="submit" className={styles.buttonSubmitt}>
          Submit your Text
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
      </form>
    </section>
  );
};

export default TaskForm;

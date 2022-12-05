import React from "react";
import styles from "./TaskForm.module.css";

// This component renders a thought submission form.
// Submit button is disabled if string entered in textarea is <5 or >140 characters
const TaskForm = ({newText, newTextChange, handleFormSubmit }) => {
    return (
    <section className={styles.sectionForm}>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <h2>Submit your thoughts below! 😍 </h2>
        <textarea
          value={newText}
          onChange={newTextChange}
          placeholder="... make me Happy! "
        />

        <button
          type="submit"
          className={styles.buttonSubmitt}
          disabled={newText.length < 5 || newText.length > 140}
        >
          Submit your Text
          <span aria-label="heart-emoji" role="img">
            ❤️
          </span>
        </button>
      </form>
    </section>
  );
};

export default TaskForm;

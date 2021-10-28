import React from "react";
import Counter from "./Counter";

const Form = ({ onFormSubmit, newThought, onSetThoughtChange }) => {
  return (
    <form onSubmit={onFormSubmit} className="question-card">
      <section className="question-container">
        <label htmlFor="newThought" className="question">
          What is making you happy right now?
        </label>
        <input
          id="newThought"
          type="text"
          placeholder="Type your happy thougt here"
          value={newThought}
          onChange={onSetThoughtChange}
          className={newThought.length < 5 ? "invalid-input" : ""}
        ></input>
      </section>
      <Counter counter={newThought.length} />

      <button
        className="submit-btn"
        type="submit"
        disabled={newThought.length < 5 || newThought.length > 140}
      >
        <span role="img" aria-label="heart-emoji" className="icon-btn">
          ❤️
        </span>
        Send Happy Thought
        <span role="img" aria-label="heart-emoji" className="icon-btn">
          ❤️
        </span>
      </button>
    </form>
  );
};

export default Form;

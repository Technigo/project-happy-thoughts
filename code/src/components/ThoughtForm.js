import React from "react";
import Characters from "./Characters";

const ThoughtForm = ({ onFormSubmit, newThought, SetNewThought }) => {
  const checkKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onFormSubmit(e);
      SetNewThought("");
      //this clears textarea and is in the onChange
    }
  };

  const emptyTextarea = (value) => value.replace(/\s/g, "").length === 0;
  //this disables the submit button so you can't send empty messages

  return (
    <form onSubmit={onFormSubmit}>
      <section className="form-container">
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          onKeyDown={(e) => checkKey(e)}
          onChange={(e) => SetNewThought(e.target.value)}
        ></textarea>
        <div className="btn-container">
          <button
            className="submit-btn"
            type="submit"
            disabled={
              newThought.length < 5 ||
              newThought.length > 140 ||
              emptyTextarea(newThought)
            }
          >
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            Send Happy Thought{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </button>
          <Characters counter={newThought.length} />
        </div>
      </section>
    </form>
  );
};

export default ThoughtForm;

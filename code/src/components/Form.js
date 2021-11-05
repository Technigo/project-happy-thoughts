import React from "react";

const Form = ({ onFormSubmit, newThought, setNewThought, likeClick }) => {
  const charactersLeft = 140 - newThought.length;

  return (
    <form className="new-thought-container" onSubmit={onFormSubmit}>
      <label className="new-thought-label" htmlFor="newThought">
        What´s making you happy right now?
      </label>
      <textarea
        className="new-thought-input"
        type="text"
        id="newThought"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />

      <section className="input-info">
        <p
          className="characters"
          style={{
            color: charactersLeft < 0 && "red",
          }}
        >
          {charactersLeft} / 140
        </p>
        <p className="clicked-likes">
          You <span className="heart">&#10084;</span> : {likeClick} posts
        </p>
      </section>
      <button
        // disabled={newThought.length < 5 || newThought.length > 140}
        className="new-thought-button"
        type="submit"
      >
        <span className="heart">&#10084;</span> Send Happy Thought!{" "}
        <span className="heart">&#10084;</span>
      </button>
    </form>
  );
};
export default Form;

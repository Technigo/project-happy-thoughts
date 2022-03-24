import React from "react";

const ThoughtInput = ({ handleInputSubmit, thought, setThought }) => {
  return (
    <div className="input-wrap">
      <form className="input" onSubmit={handleInputSubmit}>
        <label htmlFor="textInput" className="input-label">
          What is making you happy right now?
        </label>
        <textarea
          className="input-text"
          id="textInput"
          type="text"
          placeholder="Type your thought here :)"
          value={thought}
          onChange={(event) => setThought(event.target.value)}
          maxLength={140}
        />

        {/* I started with having Button as a separate element, but ran into an issue with a text length limitations, so decided to move it into the form. */}
        <button
          disabled={thought.length < 6 || thought.length > 140}
          type="submit"
          className="btn"
        >
          <span role="img" aria-label="heart emoji">
            ❤️{" "}
          </span>
          Send Happy Thought
          <span role="img" aria-label="heart emoji">
            {" "}
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};

export default ThoughtInput;

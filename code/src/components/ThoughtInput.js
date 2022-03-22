import React from "react";
import Button from "./Button";

const ThoughtInput = ({ onInputSubmit, thought, setThought }) => {
  return (
    <form className="input" onSubmit={onInputSubmit}>
      <label htmlFor="textInput" className="input-label">
        What is making you happy right now?
      </label>
      <textarea
        className="input-text"
        id="textInput"
        type="text"
        value={thought}
        onChange={(event) => setThought(event.target.value)}
        maxLength={140}
      />
      <Button />
    </form>
  );
};

export default ThoughtInput;

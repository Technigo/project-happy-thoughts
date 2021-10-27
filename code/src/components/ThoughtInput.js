import React from "react";
import "./thoughtInput.css";

const ThoughtInput = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="input-box" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What's making you happy right now? </label>
      <input
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button type="submit">Send thought</button>
    </form>
  );
};
export default ThoughtInput;

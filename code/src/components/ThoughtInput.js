import React, { useState } from "react";
import "./thoughtInput.css";

const ThoughtInput = ({ onFormSubmit, newThought, setNewThought }) => {
  const [wobble, setWobble] = useState(0);

  return (
    <form className="input-box" onSubmit={onFormSubmit}>
      <label className="input-title" htmlFor="newThought">
        What's making you happy right now?{" "}
      </label>
      <input
        className="new-thought-input"
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button
        onClick={() => setWobble(1)}
        onAnimationEnd={() => setWobble(0)}
        wobble={wobble}
        className="send-thoughts-button"
        type="submit"
      >
        <p className="heart-input"> &hearts;</p> Send thought{" "}
        <p className="heart-input"> &hearts;</p>
      </button>
    </form>
  );
};
export default ThoughtInput;

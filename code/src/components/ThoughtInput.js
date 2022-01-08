import React, { useState } from "react";
import "./thoughtInput.css";

const ThoughtInput = ({
  onFormSubmit,
  newThought,
  setNewThought,
  name,
  setName,
}) => {
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

      <label>
        <input
          className="name-input"
          type={"text"}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button
        onClick={() => setWobble(1)}
        onAnimationEnd={() => setWobble(0)}
        wobble={wobble}
        className="send-thoughts-button"
        type="submit"
        disabled={newThought.length < 5 || newThought.length > 140}
      >
        <p className="heart-input"> &hearts;</p> Send thought{" "}
        <p className="heart-input"> &hearts;</p>
      </button>
    </form>
  );
};
export default ThoughtInput;

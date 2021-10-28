import React from "react";

const ThoughtForm = ({
  onFormSubmitt,
  newThought,
  setNewThought,
  handleIncrement,
  count,
}) => {
  return (
    <form onSubmit={onFormSubmitt}>
      <label
        htmlFor="newThought"
        disabled={newThought.length < 5 || newThought.length > 140}
      >
        What's is making you happy right now?
      </label>
      <input
        id="newThought"
        className="input"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button onClick={handleIncrement} type="submit" className="send-btn">
        <span className="send-heart">❤</span>
        Send happy thought
        <span className="send-heart">❤</span>
        {count}times
      </button>
    </form>
  );
};

export default ThoughtForm;

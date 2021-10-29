import React from "react";

const ThoughtForm = ({
  onFormSubmitt,
  newThought,
  setNewThought,
  handleIncrement,
  count,
}) => {
  return (
    <form className="form" onSubmit={onFormSubmitt}>
      <div className="form-container">
        <p className="form-title">What is making you happy right now?</p>
        <label
          htmlFor="label-title"
          disabled={newThought.length < 5 || newThought.length > 140}
        ></label>
        <textarea
          className="textarea"
          id="newThought"
          // className="input"
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
      </div>
    </form>
  );
};

export default ThoughtForm;

import React from 'react';

//passing the props gathered from the App.js
const ThoughtForm = ({
  onFormSubmit,
  newThought,
  setNewThought,
  setName,
  name,
}) => {
  return (
    <form className="question-form" onSubmit={onFormSubmit}>
      <label htmlFor="newThought" className="form-title">
        What's making you happy right now?
      </label>
      <textarea
        aria-label="Placeholder, write your happy thoughts"
        className="text-area"
        rows="4"
        cols="20"
        id="newThought"
        type="textarea"
        maxLength="140"
        minLength="5"
        required
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="my happy thoughts..."
      ></textarea>

      <label className="name-input">
        <input
          className="name-inputfield"
          type={'text'}
          placeholder="Type your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div className="form-bottom-wrapper">
        <button
          aria-label="button that sends happy thought"
          className="thought-btn"
          disabled={newThought.length < 5 || newThought.length > 140}
          type="submit"
        >
          <div className="send-wrapper">
            <span
              className="send-happy-thoughts"
              role="img"
              aria-label="Heart emoji"
            >
              &#10084;&#65039; Send Happy Thought &#10084;&#65039;
            </span>
          </div>
        </button>
        {/* A text-counter showing red numbers when there are 10 characters left */}
        <div className="text-counter">
          <span style={{ color: newThought.length > 130 ? 'red' : 'grey' }}>
            {140 - newThought.length}
          </span>
          /140
        </div>
      </div>
    </form>
  );
};

export default ThoughtForm;

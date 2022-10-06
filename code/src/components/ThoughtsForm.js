import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit}>
        <p className="form-title">Happy and you know it? Share your thought!</p>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Happy? Tell the world why!"
          rows="5"
          cols="30" />

        <button
          className="submit-btn"
          type="submit"
          disabled={newThought.length < 5 || newThought.length > 140}>
           Send!
        </button>
      </form>
    </div>
  );
};

export default ThoughtsForm;
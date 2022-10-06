import React from 'react';

const HappyThoughtsForm = ({ newHappyThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="thoughtform-container">
      <form onSubmit={onFormSubmit}>
        <p className="form-title">Spread some joy, post a happy tweet below</p>
        {/* <span className="emoji" role="img" aria-label="ice-cream-emoji">🍭</span> */}
        <textarea
          value={newHappyThought}
          onChange={onNewThoughtChange}
          placeholder="For example, how many dogs did you pet today?"
          rows="5"
          cols="30" />
        <button
          className="submit-btn"
          type="submit"
          disabled={newHappyThought.length < 5 || newHappyThought.length > 140}>
          Send Thought <span role="img" aria-label="heart-emoji">❤️‍🔥</span>
        </button>
      </form>
    </div>
  );
};

export default HappyThoughtsForm;
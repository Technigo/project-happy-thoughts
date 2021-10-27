import React from 'react';

const NewThought = ({ onFormSubmit, newThought, setNewThoughts, heart, errors }) => {
  return (
    <form className="newThought" onSubmit={onFormSubmit}>
      <label>What is making you happy right now?</label>
      <textarea
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThoughts(e.target.value)}
        placeholder="Write your happy thought here.."
      />
      <div className="new-thought-button-container">
      <button type="submit" disabled={newThought.length < 5 || newThought.length > 140}>
        <img src={heart} alt="Red heart emoji" /> Send happy thought!{' '}
        <img src={heart} alt="Red heart emoji" />
      </button>
      <p>{newThought.length}/140 characters</p>
      </div>
      {newThought.length < 5 && (
        <p className="errorMessage">Your message must be more than 5 characters!</p>
      )}
      {newThought.length > 140 && (
        <p className="errorMessage">Your message must be less than 140 characters!</p>
      )}
    </form>
  );
};

export default NewThought;

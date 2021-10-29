import React from 'react';

// This is my function that lets the user post a new post
const NewThought = ({ onFormSubmit, newThought, setNewThoughts, heart }) => {
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
        {/*This button is deactivated when the user has put in less than 5 or more than 140 characters */}
        <button type="submit" disabled={newThought.length < 5 || newThought.length > 140}>
          <img src={heart} alt="Red heart emoji" /> Send happy thought!{' '}
          <img src={heart} alt="Red heart emoji" />
        </button>
        {/* Presents how many characters you have printed in the form */}
        {/* Currently trying a new thing that isn't really working out */}
        {newThought.length < 5 && (
          <p className="errorMessage">{newThought.length}/140 characters</p>
        )}
        {newThought.length <= 140 && newThought.length >= 5 && <p>{newThought.length}/140 characters</p>}
        {newThought.length > 140 && (
          <p className="errorMessage">{newThought.length}/140 characters</p>
        )}
      </div>
      {/* This error message is shown if you have written less than 5 characters */}
      {newThought.length < 5 && (
        <p className="errorMessage">Your message must be more than 5 characters!</p>
      )}
      {/* This error message is shown if you have written more than 140 characters */}
      {newThought.length > 140 && (
        <p className="errorMessage">Your message must be less than 140 characters!</p>
      )}
    </form>
  );
};

export default NewThought;

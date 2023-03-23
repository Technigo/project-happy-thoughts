import React from 'react'

export const HappyForm = ({ handleFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={handleFormSubmit} className="happyform">
      <h1>What makes you happy?</h1>
      <textarea
        id="w3review"
        rows="4"
        cols="50"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
        placeholder="Happy thought here!" />
      <p className="character-counter">Characters: {newThought.length} / 140</p>
      <button
        type="submit"
        className="loveBtn"
        disabled={newThought.length < 5 || newThought.length > 140}>
          Happy thoughts
      </button>
    </form>
  );
}

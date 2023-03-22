import React from 'react'

export const HappyForm = ({ onFormSubmit, newThought, onAddNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">
        <h1>What make&apos;s you happy?</h1>
        <textarea
          value={newThought}
          onChange={onAddNewThought}
          className="newThought"
          placeholder="Happy thought here!" />
        <button type="submit" className="loveBtn">Happy thoughts</button>
      </label>
    </form>
  );
}
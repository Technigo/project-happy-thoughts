import React from 'react'

export const HappyForm = ({ handleFormSubmit, newThought, setNewThought }) => {
  const onAddNewThought = (event) => {
    setNewThought(event.target.value)
  }
  return (
    <form onSubmit={handleFormSubmit} className="happyform">

      <h1>What make&apos;s you happy?</h1>
      <textarea
        value={newThought}
        onChange={onAddNewThought}
        className="newThought"
        placeholder="Happy thought here!" />
      <button type="submit" className="loveBtn">Happy thoughts</button>
    </form>
  );
}
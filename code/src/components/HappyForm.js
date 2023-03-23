import React from 'react'

export const HappyForm = ({ handleFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={handleFormSubmit} className="happyform">

      <h1>What make&apos;s you happy?</h1>
      <textarea
        id="w3review"
        rows="4"
        cols="50"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
        placeholder="Happy thought here!" />
      <button type="submit" className="loveBtn">Happy thoughts</button>
    </form>
  );
}

// <input type="text" value={secondInput} onChange={(event) => s
// etSecondInput(event.target.value)} />
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form
      onSubmit={onFormSubmit}
      className="thought-form">
      <h1>Happy 💖 Thought</h1>
      <div className="post-thought">
        <p>What&apos;s making you happy right now?</p>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          className="thought"
          placeholder="write something nice here..." />
        <button
          type="submit"
          className="submit-button">
           💖Send happy thought💖
        </button>
      </div>
    </form>
  )
}

export default ThoughtForm;
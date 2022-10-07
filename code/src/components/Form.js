import React from 'react';

const Form = ({ onFormSubmit, onNewThought, onNewThoughtChange, charactersCount }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Whats making you happy right now?</h1>
      <div className="text-input">
        <textarea className={charactersCount > 140 ? 'disabled-textarea' : 'textarea'} name="thought" value={onNewThought} onChange={onNewThoughtChange} placeholder="Write here...">lalalallala</textarea>
        <p>Characters left: {140 - charactersCount}</p>
      </div>
      <button className="send-button" type="submit">❤️ Send happy thought! ❤️</button>
    </form>

  )
}

export default Form
import React from 'react';

const SubmitForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="box submitBox">
      <form className="submitForm" onSubmit={onFormSubmit}>
        <h1 className="submitTitle">What is making you happy right now?</h1>
        <textarea className="inputArea" value={newThought} onChange={onNewThoughtChange} />
        <button className="submitButton" type="submit"><span className="heart" role="img" aria-label="heart">❤️</span> Send Happy Thought! <span role="img" aria-label="heart">❤️</span></button>
      </form>
    </div>
  )
}

export default SubmitForm;
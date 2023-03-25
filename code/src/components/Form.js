import React from 'react';

const Form = ({ newThought, setNewThought, handleFormSubmit, countLikes }) => {
  return (
    <form className="form-section" onSubmit={handleFormSubmit}>
      <h1 className="form-question">What is making you happy right now?</h1>
      <textarea className="form-textarea" rows="5" type="text" value={newThought} minLength={5} maxLength={140} onChange={(e) => setNewThought(e.target.value)} />
      <div className="form-counter">
        <p>{newThought.length}/140</p>
        <p>❤️:{countLikes}</p>
      </div>
      <button className="form-btn" type="submit">❤️ Send happy thoughts! ❤️</button>
    </form>
  )
}

export default Form;
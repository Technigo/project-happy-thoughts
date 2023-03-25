import React from 'react';

const Form = ({ newThought, setNewThought, handleFormSubmit, countLikes }) => {
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h1 className="form-question">What is making you happy right now?</h1>
      <input type="text" value={newThought} minLength={5} maxLength={140} onChange={(e) => setNewThought(e.target.value)} />
      <div className="form-counter">
        <p>{newThought.length}/140</p>
        <p>Likes: {countLikes}</p>
      </div>
      <button className="form-btn" type="submit">Send happy thoughts!</button>
    </form>
  )
}

export default Form;
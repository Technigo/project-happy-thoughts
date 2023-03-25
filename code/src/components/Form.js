import React from 'react';

const Form = ({ newThought, setNewThought, handleFormSubmit, countLikes }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>What is making you happy right now?</h1>
      <input type="text" value={newThought} minLength={5} maxLength={140} onChange={(e) => setNewThought(e.target.value)} />
      <div>
        <p>{newThought.length}/140</p>
        <p>Likes: {countLikes}</p>
      </div>
      <button type="submit">Send happy thoughts!</button>
    </form>
  )
}

export default Form;
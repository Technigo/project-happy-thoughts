import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className='form-container'>
      <form onSubmit={onFormSubmit}>
        <h1>What is making you happy right now?</h1>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Type your happy thoughts here..." />
        <button type="submit"><span className='emoji' role='img' aria-label='heart-emoji'>❤️</span> Send happy thought! <span role='img' aria-label='heart-emoji'>❤️</span></button>
      </form>
    </div>
  )
}

export default ThoughtsForm;
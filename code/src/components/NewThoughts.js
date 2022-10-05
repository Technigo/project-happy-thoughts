import React from 'react';

const NewThoughts = ({  newThought, handleSubmit, newThoughtChange }) => {
 
  return (
    <div className='newthought-container'>
      <h2 className='newthought-header'>What`s making you happy right now?</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        className='thought-input' 
        id='user-input' 
        value={newThought} 
        onChange={newThoughtChange} 
        required
        minlength="5"
        maxlength="140" />
        <button
          type='submit'
          className='submit-btn'>
        ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
};

export default NewThoughts;
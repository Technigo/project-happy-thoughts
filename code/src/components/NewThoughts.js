import React from 'react';

const NewThoughts = ({ newThought, handleSubmit, newThoughtChange, input }) => {
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
          minLength='5'
          maxLength='140'
        />
        <div className='charLeft'>{140 - input.length} characters left</div>
        <button type='submit' className='submit-btn'>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

export default NewThoughts;

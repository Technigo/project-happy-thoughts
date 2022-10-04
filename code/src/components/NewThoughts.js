/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable jsx-quotes */
/* eslint-disable-next-line no-unused-vars */
import React from 'react';

const NewThoughts = ({ newThought, setNewThought }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    setNewThought(newThought);
  }

  return (
    <div className='newthought-container'>
      <h2 className='newthought-header'>What`s making you happy right now?</h2>
      <form>
        <input type='text' className='thought-input' value={newThought} />
        <button
          type='button'
          className='submit-btn'
          onSubmit={handleSubmit}
        >
        ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  )
};

export default NewThoughts;

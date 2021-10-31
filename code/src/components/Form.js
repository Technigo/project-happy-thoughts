import React from 'react';

const Form = ({ onFormSubmit, newThought, handleNewThoughtChange }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='newThought'>
        Type your thought:
        <input
          id='newThought'
          type='text'
          value={newThought}
          onChange={handleNewThoughtChange}
        />
      </label>
      <button type='submit'>Send thought!</button>
    </form>
  );
};

export default Form;

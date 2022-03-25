import React from 'react';

// creating a thought

const NewThoughts = ({
  newThoughts,
  onNewThoughtsChange,
  handleFormSubmit,
  counter
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='thoughts-message'>
        <label htmlFor='newThoughts'><p className='happy-header'>What`s making you happy right now?</p></label>
        <textarea className={counter < 6 || counter > 140 ? 'disabled-textarea' : 'textarea'} _id='newThoughts' type='text' placeholder='' value={newThoughts} onChange={onNewThoughtsChange} />
        <p>{140 - counter} / 140</p>
        <button className='submit-btn' type='submit'><span role='img'>{'❤️'}Send Happy Thought{'❤️'}</span></button>
      </div>
    </form>
  );
};

export default NewThoughts;

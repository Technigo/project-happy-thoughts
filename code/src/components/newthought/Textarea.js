import React from 'react';

const Textarea = ({ newThought, setNewThought }) => {
  return (
    <div>
      <p tabIndex='0' className='new-message'>What's making you happy right now?</p>
      <textarea
        rows='5'
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
        placeholder='Your message should contain between 5 and 140 characters'
        aria-label='Your message should contain between 5 and 140 characters'
        className='input'
      >
      </textarea>
    </div>
  );
};

export default Textarea;
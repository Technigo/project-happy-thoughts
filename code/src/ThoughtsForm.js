import React, { useState } from 'react';

export const ThoughtsForm = ( { onThoughtChange }) => {
  const [newThought, setNewThought] = useState('');

  const characterCount = newThought.length;

  const handleSubmit = event => {
    //event.preventDefault();
    onThoughtChange(newThought);
  };

  /*if (characterCount < 5) {
    document.getElementsByClassName('character-count').style.color="red";
  } else {
    document.getElementsByClassName('character-count').style.color="black";
  }*/

  return (
    <section className="send-thought">

      <form onSubmit={handleSubmit}>
      <label htmlFor="your-thought">What's making you happy right now?</label>
      <textarea 
          id="your-thought" 
          value={newThought} 
          onChange={event => setNewThought(event.target.value)}
          placeholder="Type happy thought here..."
          rows="3"
        >
        </textarea>
        <button 
          className="send-thought-btn" 
          type="submit"
          disabled={characterCount < 5 || characterCount > 140 ? true : false}
        >
          <span className='send-heartemoji' role='img' aria-label='Heart'>
						    {'❤️' }
	        </span>Send Happy Thought
          <span className='send-heartemoji' role='img' aria-label='Heart'>
						    {'❤️' }
					</span>
        </button>
      </form>

      <p className="character-count">
        <span className=
          {characterCount < 5 || characterCount > 140
          ? "red-length"
          : "black-length"} 
        >
        {characterCount}
        </span> / 140
      </p>
    </section>
  )
};  
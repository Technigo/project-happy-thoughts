import React from 'react';

const ThoughtSubmitForm = ({ thought, onThoughtChange, onSubmitThought }) => {
  return (
    <form 
      id="thought-form" 
      className="container"
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor="thoughtBox">What's making you happy right now?</label><br></br>
      
      <textarea className="thought-box"
        id="thoughtBox"
        minLength="5"
        maxLength="140"
        value={thought}
        onChange={(event) => onThoughtChange (event.target.value)}
      />
      
      <button
        form="thought-form"
        type="submit"
        className="button-submit-thought"
        onClick={(event) => onSubmitThought(event)}
      >
        <span className="heart-icon" aria-label="heart emoji" role="img">&#10084;&#65039;</span>
        Send Happy Thought
        <span className="heart-icon" aria-label="heart emoji" role="img">&#10084;&#65039;</span>
      </button>

    </form>
    );
}
 
export default ThoughtSubmitForm;
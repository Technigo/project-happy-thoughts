import React from 'react';
import '../Style/ThoughtSubmitForm.css';
import '../Style/Container.css';
// import '../Style/FixedPosition.css';

const ThoughtSubmitForm = ({ thought, onThoughtChange, onSubmitThought }) => {

  return (
    <form 
      id="thought-form" 
      className="container"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="thought-form-label" htmlFor="thoughtBox">
        What's making you happy right now?
      </label>
      
      <textarea className="thought-box"
        id="thoughtBox"
        minLength="5"
        maxLength="140"
        onChange={(event) => onThoughtChange (event.target.value)}
        value={thought}
      />
      <p className="word-count">Number of characters remained: {140 - (thought.length)}</p>
      <button
        className="button-submit-thought"
        disabled={thought.length < 5 || thought.length > 140}
        form="thought-form"
        onClick={(event) => onSubmitThought(event)}
        type="submit"
      >
        <span className="heart-icon" aria-label="heart emoji" role="img">&#10084;&#65039;</span>
          Send Happy Thought
        <span className="heart-icon" aria-label="heart emoji" role="img">&#10084;&#65039;</span>
      </button>
    </form>
    );
}
 
export default ThoughtSubmitForm;
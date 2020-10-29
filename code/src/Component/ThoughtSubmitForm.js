import React from 'react';
import '../Style/ThoughtSubmitForm.css';
import '../Style/Container.css';
// import '../Style/FixedPosition.css';

const ThoughtSubmitForm = ({ thought, onThoughtChange, onSubmitThought }) => {
  const thoughtLenght = thought.length;
  console.log(thoughtLenght)
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
      <p className="word-count">Characters remained: {140 - (thought.length)}</p>
      <button
        disabled={thought.length < 5 || thought.length > 140}
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
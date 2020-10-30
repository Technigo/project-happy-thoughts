import React, { useState, useEffect } from 'react';
import '../Style/ThoughtSubmitForm.css';
import '../Style/Container.css';
import '../Style/HeartIcon.css';

const ThoughtSubmitForm = ({ thought, onThoughtChange, onSubmitThought }) => {
  const [wordCountClasses, setWordCountClasses] = useState([]);

  useEffect(() => {
    setWordCountClasses([
      "word-count",
      ...(thought.length > 140 ? ["count-turn-red"] : [])
    ]);
  },[thought])

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
        // minLength="5"
        // maxLength="140"
        onChange={(event) => onThoughtChange (event.target.value)}
        value={thought}
      />
      <div className="character-display">
        {thought.length > 140 &&
          <p className="alert-message">
            <span className="cross-sign">&#10008;</span>
            You have exceeded the maximum character limit
          </p>
        }
        <p className={wordCountClasses.join(" ")}>{thought.length}/140</p>
      </div>
      <button
        className="button-submit-thought"
        // disabled={thought.length < 5 || thought.length > 140}
        disabled={false}
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
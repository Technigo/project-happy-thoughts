import React from "react";

const Form = ({ onNewThoughtChange, newThought, onFormSubmit }) => {
    
  return (
    <div className="happy-form">
      <form onSubmit={onFormSubmit}>
          <label htmlFor="happythoughts">What's making you happy right now?</label>
          <textarea value={newThought} id="happythoughts" onChange={onNewThoughtChange} />
          <div class="thought-footer">
            <button type="submit" disabled={newThought.length < 6 || newThought.length > 140} >
                <span className="heart-emoji" role="img" aria-label="Heart">❤️</span> 
                <span className="button-text">Send Happy Thought </span>
                <span className="heart-emoji" role="img" aria-label="Heart">❤️</span>
            </button>
            <p className={newThought.length < 6 || newThought.length > 140 ? "incorrect-number-of-characters" : "correct-number-of-characters"}>
              {newThought.length}/140
            </p>
          </div>
      </form>
    </div>
  )
}

export default Form;
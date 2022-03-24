import React from "react";

const Form = ({ onNewThoughtChange, newThought, onFormSubmit }) => {
    
  return (
    <div className="happy-form">
      <form onSubmit={onFormSubmit}>
          <label htmlFor="happythoughts">What's making you happy right now?</label>
          <textarea value={newThought} id="happythoughts" onChange={onNewThoughtChange} />
          <button type="submit">
            <span className="heart-emoji" role="img" aria-label="Heart">❤️</span> 
            Send Happy Thought 
            <span className="heart-emoji" role="img" aria-label="Heart">❤️</span>
          </button>
      </form>
    </div>
  )
}

export default Form;
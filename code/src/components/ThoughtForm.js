import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  
  return (
    <form onSubmit={onFormSubmit} className="thought-input-container">
      <label htmlFor="newThought">What's making you happy right now?</label>
      <textarea
        id="newThought"
        type="text"
        rows="2"
        placeholder="Write something..."
        value={newThought} 
        onChange={(event) => {
          setNewThought(event.target.value)
        }}>
      </textarea>
      
      {newThought.length < 5 && (
        <p className="char-counter">Minimum 5 characters</p>
      )}
      {newThought.length > 140 && (
        <p className="char-counter red">Message is too long!</p>
      )}
      {newThought.length >= 5 && newThought.length <= 140 && (
        <p className="char-counter">{140 - newThought.length} characters left</p>
        
      )}

      <button
        disabled={(newThought.length > 0 && newThought.length < 5) || newThought.length > 140}
        type="submit"
        className="send-thought"
      >
        <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
      </button>
    </form>
  )
}

export default ThoughtForm
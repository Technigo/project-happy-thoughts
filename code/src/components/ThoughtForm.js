import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought, countChars, numberOfChars }) => {

    return (
        <form onSubmit={onFormSubmit} className="thought-input-container">
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          rows="2"
          value={newThought} 
          onChange={(event) => {
            setNewThought(event.target.value)
            numberOfChars(event)
          }}>
        </textarea>
        <p className="char-counter">{countChars} characters</p>
        <button type="submit" className="send-thought"><span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span></button>
      </form>
    )
}

export default ThoughtForm
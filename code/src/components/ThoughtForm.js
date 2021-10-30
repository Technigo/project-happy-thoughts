import React from "react"

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
    return (
        <form 
            className="form-wrapper"
            onSubmit={onFormSubmit}>
          <label 
          className="thought-text" 
          htmlFor="newThought">What's making you happy right now?</label>
          <textarea
          className="form-input"
        //   className={newThought.length < 6 || newThought.length > 140 ? "count-text-error": "count-text"}
          id="newThought"  
          value={newThought} 
          onChange={(e) => setNewThought(e.target.value)} 
          />
          <p className={newThought.length < 6 || newThought.length > 140 ? "count-text-error": "count-text"}>{newThought.length} of 140</p>
          <button 
          disabled={newThought.length < 6 || newThought.length > 140}
          className="form-btn"
          type="submit">
              <span className="heart-icon" role="img" aria-label="like">❤️ </span>
              Send Happy Thought
              <span className="heart-icon" role="img" aria-label="like"> ❤️</span>
              </button>
        </form>
    )

}

export default ThoughtForm
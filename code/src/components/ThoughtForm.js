import React from 'react'
import "../components/ThoughtForm.css"

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {

  return (
    <form className="thought-form" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What's making you happy right now?</label> 
      <textarea className="textarea-form"
        id="newThought"
        type="text"
        placeholder="Write your thought min 5 characters" 
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
      />
      <div className="bottom-container">
      <button className="thought-button"
        disabled={newThought.length < 5 || newThought.length > 140} type="submit">
      <span className="heart" role="img" arial-label="Heart">
        {"❤️ "}
      </span>
        Send Happy Thought 
      <span className="heart" role="img" arial-label="Heart">
        {" ❤️"}
      </span>
      </button>
      <p className="thought-length"
        style={{
          color:
            newThought.length < 141
              ? "#000"
              : "#FF4133",
        }}
      >
        {newThought.length} / 140
      </p>
      </div>
    </form>
  )
}

export default ThoughtForm
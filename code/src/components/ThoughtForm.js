import React from 'react'
import "../components/ThoughtForm.css"

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {

  return (
    <form className="thought-form" onSubmit={onFormSubmit}>
      <label className="happy-thought" htmlFor="newThought">What's making you happy right now?</label> 
      <textarea className="textarea-form"
        id="newThought"
        type="text"
        rows="3"
        placeholder="my happy thought..." 
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
      />
      <div className="bottom-container">
      <button className="thought-button"
        disabled={newThought.length < 5 || newThought.length > 140} type="submit">
      <span className="heart" role="img" arial-label="Heart">
        {"❤️ "}
      </span>
      <span className="button-text">Send Happy Thought</span> 
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
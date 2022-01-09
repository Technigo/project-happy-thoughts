import React from "react"

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />

        <button
          className="send-button"
          disabled={newThought.length < 5 || newThought.length > 140}
          type="submit"
        >
          <span role="img" aria-label="heart image">
            ❤️
          </span>
          Send happy thought!
          <span role="img" aria-label="heart image">
            ❤️
          </span>
        </button>
      </form>
    </div>
  )
}

export default ThoughtForm

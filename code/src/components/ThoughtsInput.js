import React from "react"

const ThoughtsInput = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <div className="submit-container">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your thought</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button disabled={newThought.length < 5} type="submit">
          Send thought!
        </button>
      </form>
    </div>
  )
}

export default ThoughtsInput

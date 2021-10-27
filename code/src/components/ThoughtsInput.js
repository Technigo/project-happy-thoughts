import React from "react"

const ThoughtsInput = ({
  onThoughtsInputSubmit,
  setNewThought,
  newThought,
}) => {
  return (
    <div>
      <form onSubmit={onThoughtsInputSubmit}>
        <label htmlFor="NewThought">Share a kind thought:</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button
          disabled={newThought.length < 5 || newThought.length > 140}
          type="submit"
        >
          Send!
        </button>
      </form>
    </div>
  )
}

export default ThoughtsInput

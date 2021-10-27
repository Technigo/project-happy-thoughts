import React from "react"

const ThoughtsInput = ({
  onThoughtsInputSubmit,
  onThoughtsInputChange,
  newThought,
}) => {
  return (
    <div>
      <form onSubmit={onThoughtsInputSubmit}>
        <label htmlFor="NewThought">Write your thought</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={onThoughtsInputChange}
        />
        <button type="submit">Send!</button>
      </form>
    </div>
  )
}

export default ThoughtsInput

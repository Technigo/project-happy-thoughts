import React from "react"

const SubmitThoughts = ({ newThought, onFormSubmit, setNewThought }) => {
  return (
    <form className="post" onSubmit={onFormSubmit}>
      <label>What's making you happy right now?</label>
      <textarea
        placeholder="Write something..."
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
      />

      <button className="button" type="submit">
        <span role="img" aria-label="Heart">
          ❤️Send Happy Thought❤️
        </span>
      </button>
    </form>
  )
}

export default SubmitThoughts

import React from "react"

const SubmitThoughts = ({newThought, onFormSubmit, setNewThought}) => {  
  return (
    <form className="post" onSubmit={onFormSubmit}>
      <label>What's making you happy right now?</label>
      <textarea value={newThought} onChange={(event) => setNewThought(event.target.value)} />
      <button className="button" type="submit">
        ❤️Send Happy Thought❤️
      </button>
    </form>
  )
}

export default SubmitThoughts

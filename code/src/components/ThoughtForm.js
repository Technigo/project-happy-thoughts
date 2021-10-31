import React from "react";

const ThoughtForm = ( {onFormSubmit, newThought, setNewThought }) => {
    return (
      <form className="happy-form" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?
        <textarea
          className="newThought"
          id="newThought"
          type="text"
          placeholder="Type your thoughts here..."
          autoComplete="off"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          >
        </textarea>
        </label>
        <button
            disabled={newThought.length < 5}
            className="send-btn"
            type="submit">
                &hearts; Send happy thought &hearts;
        </button>
      </form>
    )
}

export default ThoughtForm
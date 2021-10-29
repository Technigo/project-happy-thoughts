import React from "react"

const ThoughtsInput = ({
  onFormSubmit,
  setCounterValue,
  newThought,
  setNewThought,
}) => {
  const RefreshButton = () => {
    window.location.reload("Refresh")
  }
  return (
    <>
      <div className="container">
        <span className="refresh-wrapper">
          <button
            className="refresh-btn"
            value="Refresh"
            onClick={RefreshButton}
          >
            Refresh thoughts
          </button>
        </span>
        <div className="submit-wrapper">
          <form
            onSubmit={
              ((e) => setCounterValue(e.target.value.length), onFormSubmit)
            }
          >
            <label htmlFor="newThought">
              <p>What is making you happy right now?</p>
            </label>
            <textarea
              rows="4"
              id="newThought"
              type="text"
              placeholder="write your thought here"
              value={newThought}
              onChange={(e) => setNewThought(e.target.value)}
            />
            <p className="letter-counter">{140 - newThought.length} / 140</p>
            <button
              className="submit-btn"
              disabled={newThought.length < 5 || newThought.length > 140}
              type="submit"
            >
              <span role="img" aria-label="heart">
                ❤️
              </span>
              Send Happy Thought
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ThoughtsInput

import React from "react"

const ThoughtsInput = ({
  onFormSubmit,
  setCounterValue,
  newThought,
  setNewThought,
}) => {
  return (
    <>
      <div className="container">
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
            <p className="letter-counter">
              {140 - newThought.length} / 140 characters left
            </p>
            <button
              className="submit-btn"
              disabled={newThought.length < 5}
              type="submit"
            >
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              Send Happy Thought{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ThoughtsInput

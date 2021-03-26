import React from 'react'

const ThoughtForm =({ thoughtNew, onThoughtNewChanged, onFormSubmit }) => {
  return (
    <>
      <form className="form-container" onSubmit={onFormSubmit}>
        <label className="form-text" htmlFor="thoughtNew">What´s making you happy right now?</label>
        <input
        className="form-input"
        id="thoughtNew"
        type="text"
        value={thoughtNew}
        onChange={onThoughtNewChanged}/>

        <div className="button-counter-row">
          <button type="submit"
            className="form-submit-button"
            disabled={
            thoughtNew.length < 5 || thoughtNew.length > 140 ? true : false}>
            <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
          </button>
          <p className="characters-counter">
            <span
              style={{ color: thoughtNew.length >= 140 ? '#ff3933' : '#000' }}>
              {thoughtNew.length}
            </span>
            /140
				</p>
        </div>
      </form>
  </>
  )
}

export default ThoughtForm
import React from 'react'

import Emoji from './Emoji'

const ThoughtForm = ( { onFormSubmit, newThought, setNewThought } ) => {
    return(
        <form onSubmit={onFormSubmit} className="submit-form">
            <label htmlFor="newThough"><h1>What's making <em>you</em> <strong>happy</strong> right now?</h1></label>
            <input
                id="newThought"
                type="text"
                value={newThought}
                onChange={(event) => setNewThought(event.target.value)}
                placeholder="Share a smile..."
                required
            />
            <p className="char-count">{newThought.length} / 100 characters</p>
            <button
                className="submit-btn"
                type="submit"
                disabled={newThought.length < 1 || newThought.length > 100}
            >
                <Emoji symbol="❤️" label="Heart" />
                <span>&nbsp;Send happy thoughts!&nbsp;</span>
                <Emoji symbol="❤️" label="Heart" />
            </button>
        </form>
    )
}

export default ThoughtForm
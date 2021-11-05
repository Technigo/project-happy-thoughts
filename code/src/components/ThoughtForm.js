import React from 'react'

import Emoji from './Emoji'

const ThoughtForm = ( { onFormSubmit, newThought, setNewThought } ) => {
    return(
        <form onSubmit={onFormSubmit} className="submit-form">
            <label htmlFor="newThough"><h1>What's making <em>you</em> <strong>happy</strong> right now?</h1></label>
            <input
                pattern=".{5,140}"
                title="Your message must contain at least 5 characters, but no more than 140."
                id="newThought"
                type="text"
                value={newThought}
                onChange={(event) => setNewThought(event.target.value)}
                placeholder="Share a smile..."
                required
            />
            <button
                className="submit-btn"
                type="submit">
                <Emoji symbol="❤️" label="Heart" />
                <span>&nbsp;Send happy thoughts!&nbsp;</span>
                <Emoji symbol="❤️" label="Heart" />
            </button>
        </form>

    )
}

export default ThoughtForm
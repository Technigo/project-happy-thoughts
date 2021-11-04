import React from 'react'

const ThoughtForm = ( { onFormSubmit, newThought, setNewThought } ) => {
    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor="newThough">Type your thought</label>
            <input
                pattern=".{5,140}"
                title="Your message must contain at least 5 characters, but no more than 140."
                id="newThought"
                type="text"
                value={newThought}
                onChange={(event) => setNewThought(event.target.value)}
            />
            <button type="submit">
                Send thought!
            </button>
        </form>
    )
}

export default ThoughtForm
import React from 'react'

const ThoughtForm = ({newThought, handleNewThought, handleFormSubmit}) => {

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>What's making you happy right now?</h2>
            <textarea value={newThought} onChange={handleNewThought} />
            <button
                type='submit'
                disabled={newThought.length < 5 || newThought.length > 141}
            >
                <span role='img' aria-label='heart emoji'>❤️</span>Send Happy Thought<span role='img' aria-label='heart emoji'>❤️</span>
            </button>
        </form>
    )

}


export default ThoughtForm

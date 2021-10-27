import React from 'react'
import Emoji from './Emoji'

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
    return (
    <main>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="newThought">What's making you happy right now?</label>
            <input
                id="newThought"
                type="text"
                value={newThought}
                onChange={(event) => setNewThought(event.target.value)}
            />

            <button className="sendbtn" disabled={newThought.length < 5} type="submit">
            <Emoji symbol=":heart:" label="heart"/> Send Happy Thought <Emoji symbol=":heart:" label="heart"/>
            </button>

        </form>
    </main>
    )
}

export default ThoughtForm
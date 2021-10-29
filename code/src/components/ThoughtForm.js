import React from 'react'
import Emoji from '../utils/Emoji'

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
                placeholder="Type here..."
            />

            <button 
                className="sendbtn" 
                disabled={newThought.length < 5} 
                type="submit">
                <Emoji symbol="❤️" label="heart"/> 
                Send Happy Thought 
                <Emoji symbol="❤️" label="heart"/>
            </button>

        </form>
    </main>
    )
}

export default ThoughtForm
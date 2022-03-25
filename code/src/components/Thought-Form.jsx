import React from 'react'
import Emoji from '../utils/Emoji'

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
    return (
    <main>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="newThought">What's making you happy right now?</label>
            <textarea
                className="textinput"
                id="newThought"
                type="text"
                value={newThought}
                onChange={(event) => setNewThought(event.target.value)}
                placeholder="Type here..."
                rows="4">
            </textarea>

            <div className="counter">
                <span className={newThought.length > 140}>
                {newThought.length}</span>/140
            </div>

            <button 
                className="sendbtn" 
                disabled={newThought.length < 5 || newThought.length > 140} 
                type="submit">
                <Emoji symbol="❤️" label="heart"/> 
                 Send Happy Thoughts 
                <Emoji symbol="❤️" label="heart"/>
            </button>

        </form>
    </main>
    )
}

export default ThoughtForm
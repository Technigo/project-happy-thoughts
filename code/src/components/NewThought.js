import React, { useState } from 'react'

export const NewThought = ({ onChangeThought }) => {
    const [newThought, setNewThought] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        onChangeThought(newThought)
        setNewThought('')
    }

    const handleMessages = e => {
        setNewThought(e.target.value)
    }

    return (
        <div className="new-thought-section">
            <form onSubmit={handleSubmit}>
                <label for="title-thought-section">What's making you happy right now?</label>
                <textarea
                    id="newHappyThought"
                    name="newHappyThought"
                    rows="5"
                    cols="36"
                    value={newThought}
                    onChange={handleMessages}
                    required
                />
            <br></br>
            <button type="button" value="Submit">
                <span role="img" aria-label="heart">❤️</span>
                Send happy thought
                <span role="img" aria-label="heart">❤️</span>
            </button>
            </form>
        </div >
         )
}


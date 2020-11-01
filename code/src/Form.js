import React, { useState } from 'react'

export const Form = ({onThoughtChange} ) => {
    const [newThought, setNewThought] = useState('')

    // When submiting a thought.
   const handleSubmit = event => {
       event.preventDefault();
       onThoughtChange(newThought);
       setNewThought("")
    };

    return (
        <form 
            className="form-container"
            onSubmit={handleSubmit}
            >
                <h3>What's making you happy right now?</h3>
                <textarea
                    rows='5'
                    value={newThought}
                    onChange={e => setNewThought(e.target.value)}
                ></textarea>
                <div>
                    <button
                        className="submit-button"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={newThought.length < 5 || newThought.length > 140 ? true : false}
                    > 
                        <span role='img' aria-label='Heart'>
                            {'❤️ '}
                        </span>
                        Send a happy thought
                        <span role='img' aria-label='Heart'>
                            {' ❤️'}
                        </span>
                    </button>
                </div>
        </form>
    )
}
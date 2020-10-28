import React, { useState } from 'react'

export const Form = ({onThoughtChange} ) => {
    const THOUGHT_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [newThought, setNewThought] = useState('')

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
                        Send a happy thought ❤️
                    </button>
                </div>
        </form>
    )
}
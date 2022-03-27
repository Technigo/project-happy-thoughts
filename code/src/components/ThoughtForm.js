import React, { useState } from 'react'

const ThoughtForm = () => {
    const [newThought, setNewThought] = useState('')

    const onNewThoughtChange = (e) => {
        setNewThought(e.target.value)
    }

    const createThought = (e) => {
        e.preventDefault()
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: newThought
                })
            }
        )
            .then(data => console.log(data))
    }
    return (
        <form onSubmit={createThought}>
            <div>What's making you happy right now?</div>
            <textarea value={newThought} onChange={onNewThoughtChange} />
            <button type='submit'>❤️Send Happy Thought❤️</button>
        </form>
    )
}

export default ThoughtForm;

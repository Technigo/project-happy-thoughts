import React, { useState } from 'react'

const CreateThought = ({ setThoughts }) => {
    const [newThought, setNewThought] = useState('')

    const onNewThoughtChange = (e) => {
        setNewThought(e.target.value)
    }

    const createThought = (e) => {
        e.preventDefault()
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: newThought
            })
        }
        )
            .then(res => res.json())
            .then(newThoughtFromApi => {
                setThoughts((previousThoughts) => [newThoughtFromApi, ...previousThoughts])
            })
    }

    const MAX_THOUGHT_LENGTH=140
    return (
        <form onSubmit={createThought}>
            <div>What's making you happy right now?</div>
            <textarea value={newThought} onChange={onNewThoughtChange} />
            <button disabled={newThought.length<3 || newThought.length> 140} type='submit'>❤️Send Happy Thought❤️</button>
            <span>{newThought.length}/{MAX_THOUGHT_LENGTH}</span>
        </form>
    )
}

export default CreateThought;

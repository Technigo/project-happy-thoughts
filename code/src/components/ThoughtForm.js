import React, { useState } from 'react'

const ThoughtForm = () => {
// // { newThought, onNewThoughtChange, onFormSubmit }
    const [newThought, setNewThought] = useState('')

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "message": newThought
            })
        }

        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Happy thoughts happy thoughts.</h1>
            <textarea value={newThought} onChange={onNewThoughtChange} />
            <button type="submit">Send happy thought</button>
        </form>
    )
}

export default ThoughtForm;


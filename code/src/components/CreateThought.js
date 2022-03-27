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
        <form className="createForm container" onSubmit={createThought}>
            <div>What's making you happy right now?</div>
            <textarea value={newThought} onChange={onNewThoughtChange} />
            <div className="createFormFooter">
                <button className="submitFormButton" disabled={newThought.length<6 || newThought.length> 140} type='submit'>
                    <span className="heart">❤️</span>Send Happy Thought <span className="heart">❤️</span>
                </button>
                {/* Ternary operator to change ClassName when the length of characters is invalid */}
                <span className={"thoughtLengthCounter" + (newThought.length > MAX_THOUGHT_LENGTH ? " invalidThoughtLength":"") }>{newThought.length}/{MAX_THOUGHT_LENGTH}</span>
            </div>
        </form>
    )
}

export default CreateThought;

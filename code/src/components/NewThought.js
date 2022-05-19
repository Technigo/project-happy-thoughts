import React, { useState } from "react";


// useState

export const NewThought = () => {
    const [thoughts, setThoughts] = useState ([])
    const [newThought, setNewThought] = useState('')


//event

    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: newThought})
        }

//fetch url

        fetch('https://happy-thoughts-api-hanna.herokuapp.com/thoughts', options)
            .then((res) => res.json())
            .then((data) => setThoughts([data, thoughts])) 
    }

    return (
        <>
            <form className="form" onSubmit={onFormSubmit}>
                <label>What's making you happy right now?</label>
                <textarea 
                    className="input-field"
                    rows="4"
                    value={newThought} 
                    maxLength="140"
                    onChange={event => setNewThought(event.target.value)} 
                />
                <button className="submit-button" type='submit'>
                    <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
                </button>
            </form>
        
        
        </>
    )

}

export default NewThought
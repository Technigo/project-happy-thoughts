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

        //ADD URL
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
            .then((res) => res.json())
            .then((data) => setThoughts([data, thoughts])) 
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <label>What's makng you happy right now?</label>
                <textarea 
                    value={newThought} 
                    onChange={event => setNewThought(event.target.value)} 
                />
                <button type='submit'>Submit form!</button>
            </form>
        
        
        </>
    )

}

export default NewThought
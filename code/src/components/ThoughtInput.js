import React, { useState } from 'react';


export const ThoughtInput = () => {
    const [thought, setThought] = useState('')
    const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

    const handleThought = event => {
        setThought(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    
        fetch(THOUGHTS_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({message: thought})
            }
            ).then(()=> {
                window.location.reload()
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange={handleThought}
            />
            <button
                type='submit'
                disabled={thought.length < 5 || thought.length > 140 ? true : false}
            >
            send happy thought
            </button>
            <p>{thought.length} / 140</p>
        </form>
    )

}
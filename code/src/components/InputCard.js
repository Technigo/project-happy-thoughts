import React, { useState } from 'react'

export const InputCard = () => {
    const [newThought, setNewThought] = useState('')
    const FETCH_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

    const handleSubmit = event => {
        event.preventDefault();


        fetch(FETCH_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: newThought })
            })
            .then(() => {
                window.location.reload();
            });
    };


    return (
        <form onSubmit={handleSubmit} className="input-card">
            <p className="input-card-title">What's making you happy right now?</p>
            <textarea type="text" maxLength="160" onChange={event => setNewThought(event.target.value)}></textarea>
            <p className="text-counter">{160 - newThought.length} characters left</p>
            <button className="input-card-button" type="submit">&#128151; Send Happy Thoughts &#128151;</button>
        </form>
    )
};
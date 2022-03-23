import React, { useState } from 'react'


// Creating ThoughtForm for user to post new thoughts
const ThoughtForm = (props) => {

    const [thought, setThought] = useState('')


    // Prevents default for form
    const handleFormSubmit = (event) => {
    event.preventDefault()


    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
        method: "POST",
        headers: {
        'Content-Type': "application/json",
        },
        body: JSON.stringify({ message: thought })
})
    .then((res) => res.json())
    .then((newThought) => props.setThoughts((thoughts) => [newThought, ...thoughts]))
}

    return (

        <form onSubmit={handleFormSubmit}>
            
            <div className="thought-form">
                <p>What's making you happy right now?</p>

                <input
                type="text"
                name="thought"
                onChange={event => setThought(event.target.value)}
                />

                <div>
                    <button disabled={thought === ''}
                    className="btn-happy-thought" type="submit">
                        <span role="img" aria-label="heart emoji">💗 </span>
                        Send Happy Thought
                        <span role="img" aria-label="heart emoji"> 💗</span></button>
                </div>
            </div>
        </form>
    )

    }


export default ThoughtForm
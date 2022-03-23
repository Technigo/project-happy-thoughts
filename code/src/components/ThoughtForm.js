import React, { useState } from 'react'


// Creating ThoughtForm for user to post new thoughts
const ThoughtForm = (props) => {

    const [newThought, setNewThought] = useState('')


    // Prevents default for form
    const handleFormSubmit = (event) => {
    event.preventDefault()


    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({ message: newThought })
})
    .then((res) => res.json())
    .then((newThought) => props.setThoughts((thoughts) => [newThought, ...thoughts]))
    .finally(() => setNewThought(''))
}

    return (

    <div className="thought-container">
        <form onSubmit={handleFormSubmit}>
            
        
            <div className="thought-form">
                <p>What's making you happy right now?</p>

                <input
                className="text-input"
                placeholder="Write a happy thought..."
                type="text"
                name="thought"
                onChange={event => setNewThought(event.target.value)}
                />

                <p className={
                    newThought.length < 6 || newThought.length <= 140 ? 'message-length-ok' : 'message-length-error'}> 
                {newThought.length} / 140
                
                </p>

                <div>
                    <button disabled={newThought.length < 6 || newThought.length > 140 ? true : false} /* If input is less than 6 or longer than 140 characters, display button will be disabled */
                    className="btn-happy-thought"
                    type="submit">
                    
                    <span role="img" aria-label="heart emoji">❤️ </span>
                    Send Happy Thought
                    <span role="img" aria-label="heart emoji"> ❤️</span></button>

                </div>
            </div>
        </form>
    </div>
    )

    }


export default ThoughtForm
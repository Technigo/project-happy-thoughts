import React, { useState } from 'react'

export const Create = () => {
    
    const [text, addMessage] = useState("");

    const handleSubmit = event => {
        // Prevent page from refreshing automatically
        event.preventDefault()
        console.log(text)
        // Post the current value of the text input to the server
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Send the JSON as a string -- object does not work here
                body: JSON.stringify({ message: text })
            }
        ).then(()=>{
            // Reload the page after the request is complete
            window.location.reload();
        }).catch(e => {console.log(e)})
    }

    return (
        <div className="submit-container">
            <form onSubmit={handleSubmit} className="submit-form">
                <p>What is making you happy?</p>
                <input type="text" onChange={event => addMessage(event.target.value)} className="text-box">
                </input>
                <input type="submit" value="Send Happy Thought" className="submit-button">
                </input>
            </form>
        </div>
    )
}

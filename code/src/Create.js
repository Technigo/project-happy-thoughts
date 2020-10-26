import React, { useState } from 'react'

export const Create = () => {
    
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        // Prevent page from refreshing automatically
        event.preventDefault()

        // Post the current value of the text input to the server
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Send the JSON as a string -- object does not work here
                body: JSON.stringify({ message: message })
            }
        ).then(()=>{
            // Reload the page after the request is complete
            window.location.reload();
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={event => setMessage(event.target.value)}
                className="form-text">
             </input>
            <input 
                type="submit"
                className="form-button"
                value="Add Message">
            </input>
        </form>
    )
}

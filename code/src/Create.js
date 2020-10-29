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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={event => addMessage(event.target.value)}
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

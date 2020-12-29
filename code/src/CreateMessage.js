import React, { useState } from 'react'

export const Create = () => {
    
    const [message, addMessage] = useState("")

    const handleSubmit = event => {
        
        event.preventDefault()
        //POST message
        fetch('https://mongo-thoughts-api.herokuapp.com/thoughts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            }
        ).then(() => {
            window.location.reload()
        }).catch(e => {console.error(e)})
    }

    return (
        <div className="submit-container">
            <form onSubmit={handleSubmit} className="submit-form">
                <p>What is making you happy?</p>
                <textarea type="text" onChange={event => addMessage(event.target.value)} rows="4" className="text-box">
                </textarea>
                <input type="submit" value="Send Happy Thought" className="submit-button">
                </input>
            </form>
        </div>
    )
}

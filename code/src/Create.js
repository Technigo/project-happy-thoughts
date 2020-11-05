import React, { useState } from 'react'

export const Create = () => {
    
    const [text, addMessage] = useState("")

    const handleSubmit = event => {
        
        event.preventDefault()
        console.log(text)
        //POST message
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            }
        ).then(() => {
            window.location.reload()
        }).catch(e => {console.log(e)})
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

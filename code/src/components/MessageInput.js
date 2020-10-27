import React, { useState } from 'react'

export const MessageInput = () => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    const [message, setMessage] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
            
        fetch(MESSAGES_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({ message: message })
            }
            ).then(()=>{
               
                window.location.reload();
            });
        
    }

    return (
        <section className="cards-container" >
            <form onSubmit={handleSubmit}>
                <div className="form-card">
                    <input
                        type="text"
                        className="input-text"
                        onChange={event => setMessage(event.target.value)}
                    />
                    <button
                        type="submit"
                        className="form-button"
                        value="new message">
                        <span role="img" aria-label="Red heart emoji">&#10084;&#65039; </span>
                        Send Happy Thoughts
                       <span role="img" aria-label="Red heart emoji"> &#10084;&#65039;</span>
                    </button>
                </div>
            </form>
        </section>
    )
}
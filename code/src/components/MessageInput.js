import React, { useState } from 'react'

export const MessageInput = () => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        fetch(MESSAGES_URL,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            }
        ).then(() => {
            window.location.reload();

        })
            .catch(err => console.log("error:, err"))
    }

    return (
        <section className="cards-container" >
            <form onSubmit={handleSubmit}>
                <div className="form-card">
                    <h1 className="love" tabIndex="0">Send some love<span role="img" aria-label="Red heart emoji"> 💖</span></h1>
                    <textarea
                        rows="4"
                        className="input-text"
                        placeholder="Type your happy-message! (6-140 caharacters)"
                        onChange={event => setMessage(event.target.value)}>
                    </textarea>
                    <button
                        type="submit"
                        className="form-button"
                        // value="new message"
                        disabled={message.length < 6 || message.length > 140 ? true : false}
                    >
                        <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
                        Send Happy Thoughts
                       <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
                    </button>
                    <p className="length">{message.length} / 140</p>
                </div>
            </form>
        </section>
    )
}
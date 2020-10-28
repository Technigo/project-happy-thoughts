import React, {useState} from 'react'

import './ThoughtsForm.css'

export const ThoughtsForm = () => {

    const apiUrl = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    const [messages, setMessages] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        fetch(apiUrl, 
            {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({ message: messages })
            }
            ).then(() => {
                window.location.reload();
        });
    };

    return (
        <article className="message-container form-container">
            <h3>What's making you happy right now?</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                className="text-box"
                id="happyThought"
                name="happyThought"
                rows="4"
                cols="40"
                placeholder="Write your happy thoughts.."
                onChange={event => setMessages(event.target.value)}
                />
                <button className="form-button"><span role="img" aria-label="heart emoji">❤️</span> Send Happy Thought<span role="img" aria-label="heart emoji">❤️</span></button>
            </form>
        </article>
    );
}   
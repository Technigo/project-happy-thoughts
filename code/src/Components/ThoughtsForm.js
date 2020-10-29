import React, {useState} from 'react'

import './ThoughtsForm.css'

export const ThoughtsForm = ({onMessageChange}) => {
    const [newMessages, setNewMessages] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        onMessageChange(newMessages);
    };

    return (
        <article className="message-container form-container">
            <h3>What's making you happy right now?</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                required
                className="text-box"
                id="happyThought"
                name="happyThought"
                rows="4"
                cols="40"
                placeholder="Write your happy thoughts.."
                value={newMessages}
                onChange={event => setNewMessages(event.target.value)}
                />
                <button className="form-button"><span role="img" aria-label="heart emoji">❤️</span> Send Happy Thought<span role="img" aria-label="heart emoji">❤️</span></button>
            </form>
        </article>
    );
}   
import React, {useState} from 'react'

import './ThoughtsForm.css'

export const ThoughtsForm = ({onMessageChange}) => {
    const [newMessages, setNewMessages] = useState("");

    /*onHandleSubmit handling what happens when the form is submitted. 
    Sending the inputted data to the postSingleMessage function is App.js via the onMessageChange prop. 
    
    Also clearing what the user has inputted in the textarea by setting hte newMessages back to an empty string by way of the setNewMessages function once the form is submitted. This is supported in the textarea value attribute where it's set to the newMessage state*/

    const handleSubmit = event => {
        event.preventDefault();
        onMessageChange(newMessages);
        setNewMessages("");
    };

    return (
        <article className="message-container form-container">
            <h3>What's making you happy right now?</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                className="text-box"
                id="happyThought"
                name="happyThought"
                rows="5"
                cols="40"
                placeholder="Write your happy thoughts.."
                value={newMessages}
                onChange={event => setNewMessages(event.target.value)}
                />
                <span className="form-message-footer">
                    <button className="form-button" disabled={newMessages.length < 6 || newMessages.length > 140 ? true : false}>
                        {/* Above comparing if the message length is less than 6 or higher than 140 make the button disabled, otherwise undisable it */}
                        <span role="img" aria-label="heart emoji">❤️</span> Send Happy Thought<span role="img" aria-label="heart emoji"> ❤️</span>
                    </button>
                    <p className="letter-counter">{newMessages.length} / 140</p>
                </span>
            </form>
        </article>
    );
}   
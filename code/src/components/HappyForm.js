import React, { useState } from 'react';
import "./happyForm.css";


const messages_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const HappyForm = props => {
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        fetch(messages_URL, {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: {"Content-Type": "application/json"}
        })
        .then(() => {
            setMessage("")
            props.onFormSubmit(message)
        })
        .catch(err => console.log("error",err))
    }
    return (
        <form className="happy-form">
            <h3>Post a happy thought!</h3>
            <textarea
            rows='3'
            value={message}
            onChange={event => setMessage(event.target.value)}
            ></textarea>
            <div className="form-footer">
                <button
                type='submit'
                onClick={handleSubmit}
                disabled={message.length < 6 || message.length > 140 ? true : false}
                >
                    <span role="img" aria-label="heart emoji"> ❤️ </span>
                    Send a happy thought!
                    <span role="img" aria-label="heart emoji"> ❤️ </span>
                </button>
                <p>{message.length} / 140 </p>
            </div>
        </form>
    )
}
import React, { useState } from 'react'
import './happyForm.css'

export const HappyForm = props => {
    const [message, setMessage] = useState("")

    const sendHappyThought = (event) => {
        event.preventDefault()
        fetch("https://technigo-thoughts.herokuapp.com", {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                setMessage("")
                props.onFormSubmit(message)
            })
            .catch(err => console.log("error:", err))
    }

    return (
        <article>
            <h3>What's making you happy right now?</h3>
            <textarea r
                rows="3"
                onChange={event => setMessage(event.target.value)}></textarea>
            <div className="formBottom">
                <button
                    type="submit"
                    className="sendThought"
                    onClick={sendHappyThought}
                    disabled={message.length < 5 || message.length > 140 ? true : false}>
                </button>
                <p>{message.length}/140</p>
            </div>
        </article>
    )
}
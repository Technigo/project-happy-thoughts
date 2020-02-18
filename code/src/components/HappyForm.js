import React, { useState } from 'react'
import './happyForm.css'

export const HappyForm = props => {
    const [message, setMessage] = useState("")

    const sendHappyThought = (event) => {
        event.preventDefault()
        fetch("https://tavferreira-happy-thoughts-api.herokuapp.com", {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                props.onFormSubmit(message)
                setMessage("")
                document.getElementById("form").reset()
            })
            .catch(err => console.log("error:", err))
    }

    return (
        <article>
            <h3>What's making you happy right now?</h3>
            <form id="form">
                <textarea
                    rows="3"
                    onChange={event => setMessage(event.target.value)}></textarea>
                <div className="formBottom">
                    <button
                        type="submit"
                        className="sendThought"
                        onClick={sendHappyThought}
                        disabled={message.length < 5 || message.length > 140 ? true : false}>
                    </button>
                    <p style={{ color: message.length > 140 ? "red" : "#cecece  " }}>{message.length}/140</p>
                </div>
            </form>
        </article>
    )
}
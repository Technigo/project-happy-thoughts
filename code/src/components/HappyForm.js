import React, { useState } from 'react'
import { CharacterCount } from "./CharacterCount"
import "./happyForm.css"

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const HappyForm = (props) => {
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        fetch(url, {
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

    const emptyMessage = (value) => value.replace(/\s/g, "").length === 0;

    return (
        <form className="happy-form">
            <h3>Post a happy thought!</h3>
            <textarea
                rows="5"
                value={message}
                placeholder="your happy thoughts here"
                onChange={event => setMessage(event.target.value)}
            ></textarea>
            <div className="form-footer">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={message.length < 6 || message.length > 140 || emptyMessage(message)}>
                    <span className="heart" role="img" aria-label="purple-heart">{"💜"}</span>Send a happy thought<span className="heart" role="img" aria-label="purple-heart">{"💜"}</span>
                </button>
                <p><CharacterCount charMinMax={message.length} /></p>
            </div>
        </form>
    )
}
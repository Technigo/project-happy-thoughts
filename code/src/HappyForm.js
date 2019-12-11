import React, { useState, useEffect } from 'react'
import './happyForm.css'

export const HappyForm = ({ onFormSubmit }) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit(message)

    }

    return (
        <form>
            <h5>Post a happy thought!</h5>
            <textarea
                rows='3'
                onChange={event => setMessage(event.target.value)}>
            </textarea>
            <p className="messageLength">{message.length} / 140</p>
            <button className="formButton"
                type="submit"
                onClick={handleSubmit}
                disabled={message.length < 5 || message.length > 140 ? true : false}>
                <span className="heartLogo">&hearts;</span>
                Send a happy thought!
                <span className="heartLogo">&hearts;</span>
            </button>
        </form>
    )
}
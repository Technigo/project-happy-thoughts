import React, { useState } from 'react'
import { Heart } from './Heart'
import './happyForm.css'

export const HappyForm = (props) => {
    const [message, setMessage] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        props.onFormSubmit(message)
        setMessage("")
    }
    return (
        <div className="formWrapper">
            <form>
                <h2>What makes you happy right now?</h2>
                <textarea
                    rows='3'
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                ></textarea>
                <div className="wraperBtn">
                    <button className="btn"
                        type="submit"
                        onClick={handleSubmit}
                        disabled={message.length < 5 || message.length > 140 ? true : false}>
                        <span>❤️</span>
                        Send a happy thought
                        <span>❤️</span>
                    </button>
                    <p>{message.length} / 140</p>
                </div>
            </form>
        </div>
    )
}
import React from 'react'
import { Form } from 'Form'
import './card.css'

export const Card = ({ message, setMessage }) => {
    return (
        <div className="card-container">
            <h2> What's making you happy rigth now?</h2>
            <Form message={message} setMessage={setMessage} />
        </div>
    )
}

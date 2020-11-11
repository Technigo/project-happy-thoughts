import React, { useState } from 'react'

import { Error } from './Error.js'
import { Heart } from './Heart'

import './input.css'
import './heart.css'

export const Input = ({ onMessageChange, inputType }) => {
    const [newMessage, setNewMessage] = useState('')
    const [error, setError] = useState('')

    /* This function checks if the inputmessage contains less than 5 characters
    or more than 140 characters. If so an errormessage is shown. */
    const checkIfMessageLengthValid = (input) => {
        if (input.length < 5) {
            setError('Enter a thought longer than 5 characters please!')
            return false
        } else if (input.length > 140) {
            setError('Enter a thought shorter than 140 characters please')
            return false
        }
        setError('')
        return true
    }

    const handleSubmit = event => {
        event.preventDefault();
        checkIfMessageLengthValid(newMessage) && onMessageChange(newMessage);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="input__container" id="input__form">
                <h2>What's making you happy right now?</h2>
                <label className="input__user-input">
                    <textarea
                        rows='4'
                        value={newMessage}
                        onChange={event => setNewMessage(event.target.value)}></textarea>
                </label>
                <Error message={error} />
                <Heart
                    styled={'heart__btn'}
                    text={'Send thought!'} />
            </form>
        </>
    )
}
import React from 'react'
import './form.css'

export const Form = ({ message, setMessage }) => {

    const handleOnChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <form onSubmit={event => event.preventDefault()} className="form">
            <input
                className="form-input"
                required
                maxlength="140"
                minlength="5"
                type="text"
                value="message"
                onChange={(event) => handleOnChange(event)}
                placeholder="Message"
            />
            <button className="form_button">Send happy thougth</button>
        </form>

    )
}

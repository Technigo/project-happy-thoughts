import React from 'react'
import './form.css'

export const Form = ({ message, setMessage, thougths, setThougths }) => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("enviar form")
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
            method: 'POST',
            body: JSON.stringify({ message: message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .catch(error => console.error('Error:', error))
            .then((newThought) => {
                setThougths([newThought, ...thougths])
                setMessage("")
            })
    }


    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <input
                className="form-input"
                required
                maxLength="140"
                minLength="5"
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
                placeholder="Message"
            />
            <button className="form_button">Send happy thougth</button>
        </form>

    )
}

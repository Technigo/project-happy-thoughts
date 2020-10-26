import React, { useState } from 'react'
import './HappyForm.css'

const Happyform = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const HappyForm = props => {
    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        fetch(Happyform, {
            method: 'POST',
            body: JSON.stringify({ message: 'Hello World' }),
            headers: { "Content-Type": "application/json" }
        })
        .then(() => {
            setMessage('')
            props.onFormSubmit(message)
        })
        .catch(err => console.log("error:", err))
    }

    return (
        <form className='happy-form'>
            <h3>Post a happy thought!</h3>
            <textarea 
                rows='3'
                valure={message}
                onChange={event => setMessage(event.target.value)}
                >   
                </textarea>

                <div className="form-footer">
                    <button
                    type='submit'
                    onClick={handleSubmit}
                    disabled={message.lenght <6 || message.lenght > 140 ? true : false}
                    >
                        Send a happy thought!
                    </button>
                    <p>{message.length} / 140</p>
                </div>
        </form>
    );
};

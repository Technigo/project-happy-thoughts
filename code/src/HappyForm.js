import React, { useState } from 'react'
import './HappyForm.css'

const Happyform = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

export const HappyForm = props => {
    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        // Sending a POST request with the message state 
        fetch(Happyform,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message }),
            }
        ).then(() => {
            setMessage('')
            // props.onFormSubmit(message)
            window.location.reload();
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
                    disabled={message.lenght < 6 || message.lenght > 140 ? true : false}
                >
                    <span role="img" aria-label="Red heart"> &#10084;&#65039;</span>

                        Send a happy thought!
                    </button>
                <p className="text-validation">
                    <span style={{ color: message.lenght < 6 || message.lenght > 140 ? "red" : "#000" }}>
                        {message.length}
                    </span>
                            / 140
                            </p>
            </div>
        </form>
    );
};

import React, { useState } from 'react';


const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const HappyForm = props => {
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                setMessage('')
                props.onFormSubmit(message)
            })
            console.error
    };
    return (

        <form className="happy-form">
            <h3>Post a happy thought!</h3>
            <textarea
                className="form-text"
                placeholder="Write your happy thoughts here..."
                rows='3'
                value={message}
                onChange={event => setMessage(event.target.value)}>
            </textarea>
            <div className="form-footer">
                <button
                    className="form-button"
                    type='submit'
                    onClick={handleSubmit}
                    disabled={message.length < 6 || message.length > 140 ? true : false}>
                    <span role='img' aria-label="heart emoji">❤️ Send a happy thought ❤️
                            </span>
                </button>
                <div className="thought-length">
                    <p>{message.length} / 140</p></div>
            </div>
        </form>
    )
}
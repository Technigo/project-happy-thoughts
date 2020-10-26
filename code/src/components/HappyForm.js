import React, { useState } from 'react'
// import "happyFrom.css"

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const HappyForm = (props) => {
    const [message, setMessage] = useState([])

    const handleSubmit = event => {
        event.preventDefault()
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ message }),
            // headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((newThought) => {
                setMessage((previousThoughts) => [newThought, ...previousThoughts])
            })

        // .then(() => {
        //     setMessage("")
        //     props.onFormSubmit(message)
        // })
        // .catch(err => console.log("error:", err))
    }

    return (
        <form className="happy-form">
            <h3>Post a happy thought!</h3>
            <textarea
                rows="3"
                value={message}
                onChange={event => setMessage(event.target.value)}
            ></textarea>
            <div className="form-footer">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={message.length < 6 || message.length > 140 ? true : false}>
                    Send a happy thought
                    </button>
                <p>{message.length} / 140</p>
            </div>
        </form>
    )
}
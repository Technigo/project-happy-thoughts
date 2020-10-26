import React, { useState } from 'react'
// import "happyFrom.css"

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const HappyForm = (props) => {
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        fetch(url, {
            method: "GET",
            body: JSON.stringify({ message }),
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                setMessage("")
                props.onFormSubmit(message)
            })
            .catch(err => console.log("error:", err))
    }

    return (
        <form className="happy-form">
            <h3>Post a happy thought!</h3>
            <textarea
                rows="3"
                value={message} o
                nChange={event => setMessage(event.target.value)}
            ></textarea>
            <div className="form-footer">
                <button
                    type="submit"
                    onClick="{handleSubmit}"
                    disabled={message.length < 6 || message.length > 140 ? true : false}></button>
            </div>
        </form>
    )
}
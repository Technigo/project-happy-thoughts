import React, { useState, useEffect } from "react"

// export const HappyForm = (onFormSubmit) => {
export const HappyForm = props => {
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        props.onFormSubmit(message)
    }



    return (
        <form>
            <h2>Post a happy thought!</h2>
            <p>{message}</p>
            <textarea
                rows='3'
                on onChange={event => setMessage(event.target.value)}>
            </textarea>
            <button type='submit'
                onClick={handleSubmit}
                disabled={message.length < 5 && message.length > 140 ? true : false}>
                ❤️ Send a happy thought ❤️
            </button>
        </form>
    )
}


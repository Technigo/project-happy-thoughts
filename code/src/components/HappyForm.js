import React, { useState, useEffect } from 'react'
import './happyForm.css'

export const HappyForm = () => {
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        fetch('https://technigo-thoughts.herokuapp.com/', {
        method: 'POST',
        body: JSON.stringify({message: message})
    })

    }

    return (
        <form>
            <h2>Post a Happy Thought</h2>
            <p>{message}</p>
            <textarea rows='4' cols='40' required onChange={event => setMessage(event.target.value)}></textarea>
            <button type='submit' onClick={handleSubmit}> Sedn a Happy thought</button>
        </form>
    )
}
import React, { useState } from 'react'
import './PostMessagesStyle.css'

export const PostMessages = () => {
    const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/"
    const [happyThougths, setHappyThougths] = useState("")

    const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGES_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ message: happyThougths })
        }
    ).then(()=>{
        window.location.reload()
    })
    }

    return (
        <div className="input-box">
            <h5>Did You Give the World Some Love Today Baby?</h5>
            <p> Please post your happy thoughts! 💌</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={event => setHappyThougths(event.target.value)}
                    className="input-text">
                    </input>
                <input 
                    type="submit"
                    className="input-button"
                    value="Add Message">
                </input>
            </form>
        </div>
    )
}
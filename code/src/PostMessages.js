import React, { useState } from 'react'
import './PostMessagesStyle.css'

const MESSAGES_URL = "https://elins-happythoughts-api.herokuapp.com/thoughts"

export const PostMessages = props => {
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGES_URL, 
        {
            method: "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify({message})
          })
          .then (() => {
            setMessage('')
            props.onFormSubmit(message)
          })
          .catch(err => console.log("error:", err))
      };

    return (
        <div className="input-box">
            <h5>What's making you happy right now?</h5>
            <form>
                <textarea
                    rows='3'
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                >
                </textarea>
                <button 
                    type="submit"
                    onClick={handleSubmit}
                    className="input-button"
                    disabled={message.length < 5 || message.length > 140}
                    >
                    <span role="img" aria-label='hearts'>❤️</span> Send happy thought <span role="img" aria-label='hearts'>❤️</span> 
                </button>
                <p className='letter-counting'>{message.length}/140</p>
            </form>
        </div>
    )
}
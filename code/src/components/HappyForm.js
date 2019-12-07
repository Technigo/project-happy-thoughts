import React, { useState, useEffect } from 'react'
import './happyForm.css'

export const HappyForm = props => {
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        console.log('it works')
        fetch('https://technigo-thoughts.herokuapp.com/', {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: { "Content-type": "application/json"}
    })
      .then(() =>  { 
          setMessage("")
          props.onFormSubmit(message)
    })
    }
  
  
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className="send-thought">
            <h2>What's making you happy right now?</h2>
            <textarea rows='4' cols='40' value={message} minLength="5" maxLength="140" required onChange={event => setMessage(event.target.value)} />
                <div className="send-happy">
                    <button type='submit' className="button-send" onClick={handleSubmit}> 💜Send a HAPPY thought💜</button>
                    <p>{message.length} / 140</p>
                </div>
            </div>
        </form>
    )
}
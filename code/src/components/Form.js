import React from 'react'
import { useState} from 'react'

const FORM_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const Form = (props) => {
    const [message, setMessage] = useState("")
    
const handleFormSubmit = event => {
    event.preventDefault()
    fetch(FORM_URL, {
        method: "POST",
        body: JSON.stringify({message}),
    })

    .then(() => {
        setMessage('')
        props.onFormSubmit(message)
    })
} 
    
       
    
    return (
    <form className='form'>
        <h3>What's making you happy right now?</h3>
       { <textarea
        rows='3'
        cols='60'
        value={message}
        onChange={event => setMessage(event.target.value)}
        ></textarea>}
        <div>
            <button className="send-button"
            type="submit"
            onClick={handleFormSubmit}
            >
            <span role='img' aria-label='heart'>❤️ </span>Send Happy thought!<span role='img' aria-label='heart'>❤️ </span></button>
        </div>
    </form>
    )
}
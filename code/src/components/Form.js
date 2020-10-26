import React from 'react'
import { useState} from 'react'

const url='https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const Form = (props) => {
    const [message, setMessage] = useState("")
    
    
    
    
    
    
    return (
    <form className='form'>
        <h3>What's making you happy right now?</h3>
        <textarea
        rows='3'
        value={message}
        onChange={event => setMessage(event.target.value)}
        ></textarea>
        <div className="button">
            <button><span role='img' aria-label='heart'>❤️ </span>Send Happy thought!<span role='img' aria-label='heart'>❤️ </span></button>
        </div>
    </form>
    )
}
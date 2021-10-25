
import React, {useState} from 'react';

export const Form = (props) => {

    const [newMessage, setNewMessage] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({message: newMessage})
        }

        /* Fetch to post a new message*/
        fetch(props.apiUrl, options)
        .then(res => res.json())
        .then(() => {
            /*spread*/
            window.location.reload();
        })
      }

    return (
        <form onSubmit={onFormSubmit}>
            <p>What makes you happy?</p>
            <textarea 
                type="text" 
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                />
            <button type="submit">Send</button>
        </form>
    )
    
}



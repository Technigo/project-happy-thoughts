import React, { useState } from 'react'

const ThoughtsForm = () => {
    const [newMessages, setNewMessages] = useState('')

    const onNewMessagesChange = (event) => {
        setNewMessages(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()



         const options =  {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    message : newMessages
                })
            }

            fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <form onSubmit={onFormSubmit}>
            <h1>Welcome to write a message about you thoughts below</h1>
            <textarea value={newMessages} onChange={e => onNewMessagesChange(e)}/>
            <button type='submit'>Submit form!</button>
        </form>
    )
}

export default ThoughtsForm
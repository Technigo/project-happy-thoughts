import React, { useState } from 'react'

const Form = () => {
const [newMessage, setNewMessage] = useState('');

const onNewMessage = (event) => {
        setNewMessage(event.target.value)
    }

return (
        <form>
            <h1>Welcome type stuff</h1>
            <textarea value={newMessage} onChange={onNewMessage} />
            <button type="submit">Send Happy Thought!</button>
        </form>
    )
}

export default Form;
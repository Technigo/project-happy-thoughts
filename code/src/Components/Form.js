import React from 'react'

export const Form = (  { newMessage, onNewMessage }) => {

const onFormSubmit = (event) => {
event.preventDefault();

fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
}

return (
        <form onSubmit={onFormSubmit}>
            <h1>Welcome type stuff</h1>
            <textarea value={newMessage} onChange={onNewMessage} />
            <button type="submit">Send Happy Thought!</button>
        </form>
    )
}

export default Form;
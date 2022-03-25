import React from 'react'

export const Form = (  { newMessage, onNewMessage } ) => {

const onFormSubmit = (event) => {
event.preventDefault();

const options =  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        //our messages space suit
        message: newMessage
        // "message": "My happy thought"
    })
}

fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    .then(res => res.json()) //space suit
    .then(data => console.log(data));
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
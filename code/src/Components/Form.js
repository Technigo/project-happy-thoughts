import React from 'react'

export const Form = ({ newMessage, onNewMessage, onFormSubmit }) => {

return (
        <form className="posting-form" onSubmit={onFormSubmit}>
            <h4>What's making you happy right now?</h4>
            <textarea value={newMessage} onChange={onNewMessage} />
            <button type="submit">Send Happy Thought!</button>
        </form>
    )
}

export default Form;
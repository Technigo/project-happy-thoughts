import React from 'react'


export const ThoughtsForm = ({newMessages, onNewMessagesChange, onFormSubmit }) => {
    return (
        <form onSubmit={onFormSubmit}>
            <h1>Welcome to write a message about you thoughts below</h1>
            <textarea value={newMessages} onChange={onNewMessagesChange}/>
            <button type='submit'>Submit form!</button>
        </form>
    )
}








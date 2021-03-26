import React from 'react';

const MessageForm = ({ messsageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <form className='form-container' onSubmit={onFormSubmit}>
            <label htmlFor='newMessage'>Share a Happy thought!</label>
            <input 
                id='newMessage'
                type='text'
                value={messsageNew}
                onChange={onMessageNewChange}
            />
            <button className='submit-button' type='submit'>
                <span role='img' aria-label='Heart'> {'❤️ '}</span>
                Send a happy thought
                <span role='img' aria-label='Heart'> {' ❤️'}</span>
            </button>
        </form>
    );
}

export default MessageForm;
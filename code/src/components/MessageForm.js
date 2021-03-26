import React from 'react';

const MessageForm = ({ messsageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <form className='form-container' onSubmit={onFormSubmit}>
            <label className='label-header' htmlFor='newMessage'>Share a Happy thought!</label>
            <textarea className='text-area-input' 
                id='newMessage'
                type='text'
                value={messsageNew}
                onChange={onMessageNewChange}>
            </textarea>
            <p className ='counter'>{messsageNew.length} / 140</p>
            <button 
                className='submit-button' 
                type='submit'
                disabled={messsageNew.length < 3 || messsageNew.length > 140 ? true : false}
            >
                <span role='img' aria-label='Heart'> {'❤️ '}</span>
                Send a happy thought
                <span role='img' aria-label='Heart'> {' ❤️'}</span>
            </button>
        </form>
    );
}

export default MessageForm;
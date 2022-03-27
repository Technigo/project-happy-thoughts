import React from 'react'

export const Form = ({ newMessage, onNewMessage, onFormSubmit }) => {

return (
        <form className="posting-form" onSubmit={onFormSubmit}>
            <label htmlfor="newMessage"><h4>What's making you happy right now?</h4>
             <textarea className="form-textarea"
                value={newMessage} 
                onChange={onNewMessage} 
                placeholder='Type here...'
            />
            <button className="form-button" type="submit" disabled={newMessage.length < 6 || newMessage.length > 140}>
            <span role="img" aria-label="heart">🖤 Send happy thought! 🖤</span>
            </button>
            </label>
        </form>
    )
}

export default Form;

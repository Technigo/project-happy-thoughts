import React from 'react'

const Message = ({ loading, newMessage, onNewMessageChange, onFormSubmit }) => {


    if (loading) {
        return <p> Loading thinking<span role="img" aria-label="heart emoji" className='loading-heart'>💓</span></p>

    }

    
    return (
        <div className="message-send-container">
            
            <form onSubmit={onFormSubmit} className="message-container">

                <label className="message-label">Give us a happy thought!</label>
                <textarea
                    id={newMessage}
                    className="message-area"
                    placeholder="Tell us what makes you happy right now..."
                    value={newMessage}
                    onChange={onNewMessageChange}
                    maxLength="140"
                    >
                </textarea>
                <button className="send-btn" type="submit"><span role="img" aria-label="heart emoji">💓</span> Send Happy Thought <span role="img" aria-label="heart emoji">💓</span></button>
            </form>
        </div>
    )
}


export default Message
import React, { useState } from 'react'

export const MessageInput = ({ onMessageChange }) => {
    
    const [newMessage, setNewMessage] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        onMessageChange(newMessage);
    }
        
    return (
        <section className="cards-container" >
            <form onSubmit={handleSubmit}>
                <div className="form-card">
                    <h1 className="love" tabIndex="0">Send some love<span role="img" aria-label="Red heart emoji"> 💖</span></h1>
                    <textarea
                        rows="4"
                        className="input-text"
                        placeholder="Type your happy-message! (6-140 caharacters)"
                        onChange={event => setNewMessage(event.target.value)}>
                    </textarea>
                    <button
                        type="submit"
                        className="form-button"
                        value={newMessage}
                        disabled={newMessage.length < 6 || newMessage.length > 140 ? true : false}
                    >
                        <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
                        Send Happy Thoughts
                       <span role="img" aria-label="Red heart emoji">&#10084;&#65039;</span>
                    </button>
                    <p className={newMessage.length <140 && newMessage.length >6 ? 'length black' :'length grey'}>{newMessage.length} / 140</p>
                    {/* <p className={inputMessage.length > 140 ? 'red-style' : 'grey-style'}>{inputMessage.length} / 140</p> */}
                </div>
            </form>
        </section>
    )
}
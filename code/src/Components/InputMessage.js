import React, { useState } from 'react';

const InputMessage = () => {
    const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        // Prevents the page from refreshing
        event.preventDefault();

        // POST request
        fetch(THOUGHTS_URL,
            {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ message: message })
            })
            .then(() => {
            // Empty the message textbox, behövs inte med window reload??
                //setMessage('');
                //props.onFormSubmit(message)
            // Refresh page
                window.location.reload();
            })
            .catch(error => console.log("error:", error))
    };

    return (
        <div className="input-message-wrapper">
            <form onSubmit={handleSubmit}>
                <h3>What's making you happy right now?</h3>
                <textarea
                    placeholder="React is making me happy!"
                    rows='4'
                    value={message}
                    onChange={event => setMessage(event.target.value)}>  
                </textarea>
                <div className="message-footer">
                    <button
                        className="submit-button"          
                        type="submit"
                        onClick={handleSubmit}
                        disabled={message.length < 6 || message.length > 140 ? true : false}
                    >
                        <span
                            role="img"
                            aria-label="Heart"
                        >❤️
                        </span>
                            Send Happy Thought
                        <span
                            role="img"
                            aria-label="Heart"
                        >❤️
                        </span>
                    </button>
                    <p>{message.length} / 140</p>

                </div>
                
            </form>
        </div>
    )
}

export default InputMessage;
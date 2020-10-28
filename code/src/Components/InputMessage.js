import React, {useState} from 'react';

const InputMessage = ({onMessageChange}) => {

    const [inputMessage, setInputMessage] = useState('');

    const handleSubmit = event => {
        // Prevents the page from refreshing
        event.preventDefault();

        // Call onMessageChange to POST new message and fetch messages again
        onMessageChange(inputMessage);

        // Clear the input field
        setInputMessage(''); 
    };

    return (
        <div className="input-message-wrapper">
            <form onSubmit={handleSubmit}>
                <h3>What's making you happy right now?</h3>
                <textarea
                    placeholder="React is making me happy!"
                    rows='4'
                    value={inputMessage}
                    onChange={event => setInputMessage(event.target.value)}>  
                </textarea>
                <div className="message-footer">
                    <button
                        className="submit-button"          
                        type="submit"
                        disabled={inputMessage.length < 6 || inputMessage.length > 140 ? true : false}
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
                    <p className={inputMessage.length > 140 ? 'red-style' : 'grey-style'}>{inputMessage.length} / 140</p>
                </div>
            </form>
        </div>
    )
}

export default InputMessage;
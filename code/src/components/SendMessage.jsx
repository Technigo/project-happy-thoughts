import React, {useState} from "react";

const SendMessage = () => {
    const [message, setMessage] = useState('')
    const [messageLength, setMessageLength] = useState(0)

    const SEND_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

    const sendMessage = () => {
        const data = { message: message }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(SEND_API, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status)
            }
            return data.json();
        }).then(update => {
            console.log(update)
        }).catch(e => {
            console.log(e)
        })
    }


    // WordCounter and Message
    const wordCount = (event) => {
        setMessage(event)
        setMessageLength(message.length)
        console.log(message, messageLength)
    }

    return (
        <>
        <div className="thought-container bg-gray">
            <div className="top-bar">
                <label htmlFor="sendThought" className="thought-text">What's making you happy right now?</label>
                <textarea className="send-thought-input" id="sendThought" onChange={event => wordCount(event.target.value)} />
            </div>
            <div className="bottom-bar">
                <button className="send-thought-btn">
                    <span role="img" aria-label="send happy thought button" onClick={sendMessage}>💖 Send Happy Thought 💖</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default SendMessage
import React, {useState} from "react";

const SendMessage = ({messageSent, setMessageSent}) => {
    const [message, setMessage] = useState('')
    const [messageLength, setMessageLength] = useState(0)

    const SEND_API = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

    const sendMessage = () => {
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        };

        fetch(SEND_API, options)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status)
            }
            return data.json();
        }).then(update => {
            // console.log(update)
            setMessageSent(true)
            document.getElementById('sendThought').value = ''

        }).catch(e => {
            // console.log(e)
        })

        setMessageSent(true)
    }


    // WordCounter and Message and Error
    const wordCount = (event) => {
        setMessage(event)
        setMessageLength(message.length)
        // console.log(message, messageLength)
        if (message.length > 140) {
            alert('Attention! You have exceeded the character limit of 140!')
        }
    }

    return (
        <>
        <div className="thought-container form-container">
            <div className="top-bar">
                <label htmlFor="sendThought" className="thought-text">What's making you happy right now?</label>
                <textarea className="send-thought-input" id="sendThought" onChange={event => wordCount(event.target.value)} />
            </div>
            <div className="bottom-bar">
                <button className="send-thought-btn">
                    <span role="img" aria-label="send happy thought button" onClick={sendMessage}>💖 Send Happy Thought 💖</span>
                </button>
                <p>{messageLength}/140</p>
            </div>
        </div>
        </>
    )
}

export default SendMessage
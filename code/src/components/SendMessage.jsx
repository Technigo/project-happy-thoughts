import React, {useState} from "react";

const SendMessage = ({messageSent, setMessageSent}) => {
    const [message, setMessage] = useState('')
    const [messageLength, setMessageLength] = useState(0)
    const [error, setError] = useState(false)

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
            setError(true)
            // alert('Attention! You have exceeded the character limit of 140!')
        } else {
            setError(false)
        }
    }

    let textErrorStyle = {}
    let buttonErrorStyle = {}
    let buttonMessage = '💖 Send Happy Thought 💖'

    if (error === true) {
        textErrorStyle = { fontWeight: 700, color: 'red' }
        buttonErrorStyle = { backgroundColor: 'black', color: 'white', cursor: 'not-allowed' }
        buttonMessage = 'Too long to send! 💀'
    } else {
        textErrorStyle = {}
    }

    return (
        <>
        <div className="thought-container form-container">
            <div className="top-bar">
                <label htmlFor="sendThought" className="thought-text bold">What's making you happy right now?</label>
                <textarea className="send-thought-input" id="sendThought" onChange={event => wordCount(event.target.value)} />
            </div>
            <div className="bottom-bar">
                <button className="send-thought-btn bold" style={buttonErrorStyle}>
                    <span role="img" aria-label="send happy thought button" onClick={sendMessage}>{buttonMessage}</span>
                </button>
                <p style={textErrorStyle}>{messageLength}/140</p>
            </div>
        </div>
        </>
    )
}

export default SendMessage
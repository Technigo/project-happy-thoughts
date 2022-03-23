import React, {useState} from "react";

const SendMessage = ({ sendMessage, setMessage}) => {
    const [messageLength, setMessageLength] = useState(0)
    const [tooLong, setTooLong] = useState(false)
    const [tooShort, setTooShort] = useState(false)


    // WordCounter and Message and Error
    const wordCount = (event) => {
        setMessage(event)
        setMessageLength(event.length)
        if (event.length < 5) {
            setTooShort(true)
        } else if (event.length > 140) {
            setTooLong(true)
        } else {
            setTooLong(false)
            setTooShort(false)
        }
    }

    let textErrorStyle = {}
    let buttonErrorStyle = {}
    let buttonMessage = '💖 Send Happy Thought 💖'

    if (tooLong === true) {
        textErrorStyle = { fontWeight: 700, color: 'red' }
        buttonErrorStyle = { backgroundColor: 'black', color: 'white', cursor: 'not-allowed' }
        buttonMessage = 'Too long to send! 💀'
    } else {
        textErrorStyle = {}
    }

    if (tooShort === true) {
        textErrorStyle = { fontWeight: 700, color: 'red' }
        buttonErrorStyle = { backgroundColor: 'black', color: 'white', cursor: 'not-allowed' }
        buttonMessage = 'Too short to send! 🥱'
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

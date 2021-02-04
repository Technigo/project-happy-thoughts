import React, { useEffect, useState } from 'react'

import moment from 'moment'

export const MessageList = () => {
    const MESSAGES_URL = 'https://happy-thoughts-dess.herokuapp.com/thoughts'
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = () => {
        fetch(MESSAGES_URL)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const filtredMessages = data.filter((message) => message.message)

                setMessages(filtredMessages)
            })
    }

    const likedHeart = (messageId) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageId}/like`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            fetchMessages()
        })
    }


    return (
        <>
            <div className="message-list">
                {messages.map((message) => {
                    return (
                        <div className="message-section">
                            <p className="message" key={message._id}>
                                {message.message}
                                <br></br>
                            </p>
                            <div className="heartbutton-section">
                                <div className="heartbutton-x-section">
                                    <button
                                        className="likeheart-button"
                                        id={`hearts-button${message._id}`}
                                        onClick={() => likedHeart(message._id)}>
                                        <span role="img" aria-label="Heartimage">❤️</span>
                                    </button>
                                        x {message.hearts}
                                </div>
                                <p>
                                    <span className="message-time">
                                        {moment(message.createdAt).fromNow()}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
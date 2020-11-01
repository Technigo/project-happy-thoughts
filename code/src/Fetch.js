import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'

import { Like } from 'Like'

export const Fetch = () => {

    const [messages, setMessages] = useState([])
    

    useEffect(() => {

        
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then((response) => {
            return response.json();
        })
        .then((text) => {
            setMessages(text)
            console.log('Request successful', text)
        })
        .catch((error) => {
            console.error('Request failed', error)
        });


    }, [])

    return (
        <div className="message-container">
            {
                messages.map(message => (
                    <div key={message.createdAt} className="message">
                        <p className="message-text">
                            {message.message}
                        </p>
                        <div className="lower-container">
                            <div className="like-container">
                                <Like _id={message._id}/>
                                <span className="likes">x{message.hearts}</span>
                            </div>
                            <span className="message-time">
                                    {moment(message.createdAt).fromNow()}
                                </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    
}
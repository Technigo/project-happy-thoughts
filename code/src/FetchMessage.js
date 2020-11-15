import React, { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'

import { Like } from 'LikeMessage'

export const Fetch = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        // GET 20 latest messagess
        fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
        .then((response) => {
            return response.json();
        })
        .then((text) => {
            setMessages(text)
        })
        .catch((error) => {
            console.error('Request failed', error)
        });

    }, [])

    const onLike = thoughtId => {
        const updatedThoughts = messages.map(thought => {
          if (thought._id === thoughtId) {
            thought.hearts += 1
          }
          return thought
        })
        setMessages(updatedThoughts)
      }

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
                                <Like _id={message._id} hearts={message.hearts} onLike={onLike} />
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
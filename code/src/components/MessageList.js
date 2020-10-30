import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton';

export const MessageList = () => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    
    const [messages, setMessages] = useState([])
   
    useEffect(() => {
        
        fetch(MESSAGES_URL)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                
                const filteredMessages = data.filter((message) => message)
                setMessages(filteredMessages)
            })
    }, [])

    const onMessageLiked = (likedMessageId) => {
        const updatedLikes = messages.map((likes) => {
          if (likes._id === likedMessageId) {
            likes.hearts += 1
          }
          return likes
        })
        setMessages(updatedLikes)
      }

    
    return (
        <section className="cards-container" >
                
            {messages.map(message => (

                <article className="message-card" key={message._id}>
                    <p className="message" tabIndex="0">
                        {message.message} </p>
                        <HeartButton liked={onMessageLiked} hearts={message.hearts} likesId={message._id} />
                    <p className="message-time" tabIndex="0">
                        {moment(message.createdAt).fromNow()}
                    </p>     
           
                </article>
            ))
            } 
        </section>

    )
}
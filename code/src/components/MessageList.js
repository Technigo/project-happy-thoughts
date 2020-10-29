import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { HeartButton } from './HeartButton';

export const MessageList = () => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    //state for messages
    const [messages, setMessages] = useState([])
    //useEffect to fetch messages
    useEffect(() => {
        //fetch from backend
        fetch(MESSAGES_URL)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                //Set the state. Data is an array of messages.
                const filteredMessages = data.filter((message) => message)
                setMessages(filteredMessages)
            })
    }, [])

    const onThoughtLiked = (likedThoughtId) => {
        const updatedThoughts = messages.map((thought) => {
          if (thought._id === likedThoughtId) {
            thought.hearts += 1
          }
          return thought
        })
        setMessages(updatedThoughts)
      }

    //render messages using map
    return (
        <section className="cards-container" >
                
            {messages.map(message => (

                <article className="message-card" key={message._id}>
                    <p className="message" >
                        {message.message} </p>
                        <HeartButton liked={onThoughtLiked} hearts={message.hearts} thoughtId={message._id} />
                    <p className="message-time">
                        {moment(message.createdAt).fromNow()}
                    </p>
                   
             
           
                </article>
            ))
            } 
        </section>

    )
}
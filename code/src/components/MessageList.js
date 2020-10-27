import React, { useEffect, useState } from 'react'
import moment from 'moment'

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
                setMessages(data)
            })

    }, [])
    //render messages using map
    return (
        <main className="wrapper">
            <section className="cards-container">
            
                {messages.map(message => (
                    <article className="message-card">
            <p className="message" key={message._id}> 
            {message.message}
            <p className="message-time"> 
            {moment(message.createdAt).fromNow()} 
             </p>
            </p>
            </article> 
        ))
    }
    </section>
    </main>
    )
}
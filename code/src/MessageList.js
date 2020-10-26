import React, {useState,  useEffect } from 'react'
import moment from 'moment'
import './MessageList.css'

export const MessageList = () => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch(MESSAGES_URL)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                const filteredData = data.filter(message => {
                    return message.message
                })
                setMessages(filteredData)
            })
    }, [])

    return (
        <div>
            {
                messages.map(message => (
                <p key={message._id} className='messages'> 
                {message.message}
                <span className='message-time'>
                    {moment(message.createdAt).fromNow()}
                </span>
                </p>
                ))
            }
        </div>
    )
}
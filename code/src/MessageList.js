import React, { useState, useEffect } from 'react'
import { HappyThought } from './HappyThought'
import { BASE_API } from './API'
import './MessageList.css'

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch(`${BASE_API}/thoughts`)
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
                messages.map(message => {
                    return <HappyThought key={message._id} props={message} />
                })
            }
        </div>
    )
}
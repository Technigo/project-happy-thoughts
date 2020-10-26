import React, {useState,  useEffect } from 'react'
import {HappyThought} from './HappyThought'
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
                messages.map(message => {
                    console.log(message)
                   return  <HappyThought key={message._id} props={message}/> 
                })
            }
        </div>
    )
}
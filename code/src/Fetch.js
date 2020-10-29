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
        <div>
            {
                messages.map(message => (
                    <div key={message.createdAt}>
                    <p className="message" >
                        {message.message}
                        <span className="message-time">
                            {moment(message.createdAt).fromNow()}
                        </span>
                        <span>{message.hearts}</span>  
                    </p>
                    <Like _id={message._id}/>
                    </div>
                ))
            }
        </div>
    )
    
}
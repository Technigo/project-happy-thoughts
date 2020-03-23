import React, {useState, useEffect} from 'react'
import moment from 'moment';
import { MessageLike } from 'MessageLike';

export const MessageList =() => {
    // Create state for messages
    const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
    const [messages, setMessages] = useState([]); 

    // Use useEffect to fetch messages from backend
    // Do this on component load
    useEffect(() => {
        // Fetch from backend
        fetch(MESSAGES_URL)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            // Set the state, data is an array of messages
            const filteredData = data.filter(message => {
                return message.message;
            })
            setMessages(filteredData);
        })
    }, []);

    // Render messages using map
    return (
        <div>
            {
                messages.map(message => (
                <div className='message-cards' key={message._id}>
                    <p>{message.message}</p>
                    <div className='message-card-bottom'> 
                        <div className='message-time'>
                            {moment(message.createdAt).fromNow()}
                        </div>
                        <MessageLike 
                            thoughtId={message._id}
                            likes={message.hearts}
                        />
                    </div>
                </div>
                ))
            }
        </div>
    )
}
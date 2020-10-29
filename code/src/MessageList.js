import React, { useEffect, useState } from 'react'
import moment from 'moment'

import './Messagelist.css'

export const MessageList = () => { 
    const MESSAGES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages, setMessages] = useState([]);

  useEffect(() => {
	fetch(MESSAGES_URL)
    	.then((res) => {
        return res.json();
    })
    .then((data) => {
    console.log(data);
    // data.reverse();

    // Sorts messages on message sent time 
    data.sort((a,b) => a.created > b.created)

    // Filter empty messages
    const filteredMessages = data.filter((message) => message.message);
    
    // Display only the 20 latest messages 
    const limitedMessages = filteredMessages.slice(0,20);

    // Save the data to state 
    setMessages(limitedMessages); 
});

}, []);

return (
    <div>
        
        {messages.map((message) => {

    return(
                    <div className="message-box" key={message._id}>
                    <p className="message">
                    {/* Message text */}
                    {message.message}

                    {/* How many have liked the post */}
                    {message.hearts}
                    
                    {/* When message was created */}
                    <span className="message-time">
                    {moment(message.createdAt).fromNow()}
                    </span>
                    </p>
                    </div>
    );
    })}
    
   
    </div>
)};

export default MessageList; 
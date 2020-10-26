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

    data.sort((a,b) => a.created > b.created)

    const filteredMessages = data.filter((message) => message.message);
    const limitedMessages = filteredMessages.slice(0,15);

    // Save the data to state 
    setMessages(limitedMessages); 
});

}, []);

return (
    <div>
        <ul>
        {messages.map((message) => {

    return(
                    <p className="message" key={message._id}>
                    {message.message}
                    {message.hearts}
                    <span className="message-time">
                    {moment(message.createdAt).fromNow()}
                    </span>
                    </p>
    );
    })}
    
    </ul>
    </div>
)};

export default MessageList; 
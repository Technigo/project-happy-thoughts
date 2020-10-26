import React, { useEffect, useState } from 'react'
import moment from 'moment'

export const MessageList = () => { 
    const MESSAGES_URL = 'https://wk11livesession.herokuapp.com/messages';
    const [messages, setMessages] = useState([]);

  useEffect(() => {
	fetch(MESSAGES_URL)
    	.then((res) => {
        return res.json();
    })
    .then((data) => {
    console.log(data);
    data.reverse();

    // data.sort((a,b) => a.created > b.created)

    const filteredMessages = data.filter((message) => message.text);
    const limitedMessages = filteredMessages.slice(0,15);

    // Save the data to state 
    setMessages(limitedMessages); 
});

}, []);

return (
    <div>
        {messages.map((message) => {
    return(
        <p className="message" key={message._id}>
         {message.text}
         <span ClassName="message-time">
         {moment(message.created).fromNow()}
         </span>
     </p>
    );
    })}
    
    </div>
)};

export default MessageList; 
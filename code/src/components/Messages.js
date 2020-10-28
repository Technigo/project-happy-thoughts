import React, { useEffect, useState } from 'react';
import moment from "moment";


export const Messages = () => {
    const MESSAGES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {

    
    fetch(MESSAGES_URL)
    .then((res) => {
        return res.json();
    } )
    .then((data) => {
        setMessages(data)
    });
},[]);
    return <div className="form-container">{messages.map((message) => {
        return  <div className="message" key={message._id}>
        {message.message} 
       
        <div className="form">
        <span className="message-time">
        {moment(message.createdAt).fromNow()}
        </span>
        <div className="like"><span className="heart">❤️</span></div>
        </div>
       </div>
        
            })}
        </div>;

        
}; 


import React, { useEffect, useState } from 'react';



export const Messages = () => {
    const MESSAGES_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {

    
    fetch(MESSAGES_URL)
    .then((res) => {
        return res.json();
    } )
    .then((data) => {
        console.log(data);
        setMessages(data)
    });
},[]);
    return <div>{messages.map((message) => {
        return <p className="message" key={message._id}> 
        {message.message}
        {message.createdAt}
        </p>
            
            })}
        </div>;
}; 
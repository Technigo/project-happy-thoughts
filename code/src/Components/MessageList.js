import React, { useEffect, useState } from 'react';

import Message from './Message';


const MessageList = () => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        fetch(MESSAGES_URL) //Default GET request
            .then((response) => {
                return response.json();
            })
            .then((data) => { // Vart ska vi förvara datan? Använd setmessages för att använda data för att ändra state
                console.log(data);
                const filteredMessages = data.filter(message => message.message)
                setMessages(filteredMessages);
            });
    }, []); // Vi behöver empty array annars blir det infinite loop. some second argument, not fetch on every re-render

    const whenLiked = (id) => {

        // Maps over the current messages and increments the like number
        const updatedMessagesWithLikes = messages.map(message => {
            if (message._id === id) {
                message.hearts += 1
            }
            return message
        })
        // Changes the state with updated likes
        setMessages(updatedMessagesWithLikes)
    }
    
    return (
        <div className="message-list">
            {
                messages.map((message) => {
                    return (
                        <Message
                            key={message._id}
                            id={message._id}
                            message={message.message} 
                            created={message.createdAt}
                            hearts={message.hearts}
                            whenLiked={whenLiked}
                        />
                    )    
                })
            }
        </div>
    )

}

export default MessageList;
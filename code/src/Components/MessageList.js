import React from 'react';

import Message from './Message';


const MessageList = ({listOfMessages, setListOfMessages}) => {
    
    const whenLiked = (id) => {
        // Maps over the current messages and increments the like number
        const updatedMessagesWithLikes = listOfMessages.map(message => {
            if (message._id === id) {
                message.hearts += 1
            }
            return message
        })
        // Changes the state with array with updated likes no
        setListOfMessages(updatedMessagesWithLikes)
    }
    
    return (
        <div className="message-list">
            {
                listOfMessages.map((message) => {
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
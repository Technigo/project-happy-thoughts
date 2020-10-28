import React, { useEffect } from 'react';

import Message from './Message';


const MessageList = ({listOfMessages, setListOfMessages, inputMessage}) => {
    const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
    //const [listOfMessages, setListOfMessages] = useState([]);

    useEffect(() => {
        fetch(MESSAGES_URL) //Default GET request
            .then((response) => {
                return response.json();
            })
            .then((data) => { 
                const filteredMessages = data.filter(message => message.message)
                setListOfMessages(filteredMessages);
            });
    }, [setListOfMessages]); // first argument - a function, second argument - empty array to prevent re-render after the fetch (by setting a new state) since this creates an infinite loop.

    
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
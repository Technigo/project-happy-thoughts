import React, { useState } from 'react';

import Message from './Message';

const MessageList = ({ listOfMessages, setListOfMessages }) => {
    const [likedPosts, setLikedPosts] = useState([]);
    
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

        // Checks if postID is in array - if not - add to array
        if (!likedPosts.includes(id)) {
            setLikedPosts([...likedPosts, id])
        }
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
            <article className="counter">
                <p>Did you spread some love?
                    <span>
                        {' 🥰'}
                    </span>
                </p>
                <p>
                    No. of posts liked
                    <span>
                        {' ❤️'}
                    </span>
                    : {likedPosts.length}
                </p>
            </article>
        </div>
    )

}

export default MessageList;
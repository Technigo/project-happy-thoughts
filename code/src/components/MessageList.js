import React from 'react'

import MessageElements from './MessageElements'

const MessageList = ({ handleLikesIncrease, messageList }) => {
    return (
        <>
            {messageList.map(message => (
                <MessageElements 
                    onLikesIncrease={handleLikesIncrease} 
                    key={message._id} 
                    message={message} 
                />
            ))}
        </>
    )
}

export default MessageList
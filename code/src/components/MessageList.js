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
                    backgroundColorClicked='rgba(255, 0, 0, 0.3)'
                    backgroundColorInactive='rgba(208, 203, 203, 0.3)'

                />
            ))}
        </>
    )
}

export default MessageList
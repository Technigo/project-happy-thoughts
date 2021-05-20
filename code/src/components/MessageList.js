import React from 'react'

import MessageElements from './MessageElements'

const MessageList = ({ handleLikesIncrease, messageList, handleClickDelete }) => {
    return (
        <>
            {messageList.map(message => (
                <MessageElements 
                    onLikesIncrease={handleLikesIncrease} 
                    onClickDelete={handleClickDelete}
                    key={message._id} 
                    message={message} 
                />
            ))}
        </>
    )
}

export default MessageList
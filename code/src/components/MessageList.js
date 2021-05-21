import React from 'react'

import MessageElements from './MessageElements'

const MessageList = ({ handleLikesIncrease, messageList, userName, handleClickDelete }) => {
    return (
        <>
            {messageList.map(message => (
                <MessageElements 
                    onLikesIncrease={handleLikesIncrease} 
                    onClickDelete={handleClickDelete}
                    key={message._id} 
                    message={message} 
                    userName={userName}
                />
            ))}
        </>
    )
}

export default MessageList
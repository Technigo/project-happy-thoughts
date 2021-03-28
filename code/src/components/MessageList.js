import React from 'react'

import MessageElement from './MessageElement';

const MessageList = ({ messageList, handleLikesIncrease }) => {
    return (
        <>
            {messageList.map(messagePost => (
                <MessageElement 
                    messagePost={messagePost} 
                    onLikesIncrease={handleLikesIncrease}    
                />
            ))}
        </>
    );
};

export default MessageList;
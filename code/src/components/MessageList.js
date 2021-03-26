import React from 'react';

import MessageElement from './MessageElement';

const MessageList = ({ messageList, handleLikesIncrease }) => {
    return (
        <>
            {messageList.map(data => (
               <MessageElement 
                    key={data._id}
                    data={data}
                    onLikesIncrease={handleLikesIncrease}
               />
            ))}
        </>    
    )
}
export default MessageList;
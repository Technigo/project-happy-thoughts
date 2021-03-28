import React from 'react';

import MessageElement from './MessageElement';


const MessageList = ({ messageList, handleLikesIncrease }) => {
    return (
        <>
        {messageList.map(input => (
                <MessageElement 
                    key={input._id}
                    input={input}
                    onLikesIncrease={handleLikesIncrease}
                    />
          ))}
        </>
    );
}

export default MessageList
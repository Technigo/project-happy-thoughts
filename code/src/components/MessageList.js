import React from "react";

import MessageElement from "./MessageElement"

const MessageList = ({messageList, handleLikeIncreas}) => {
  return (
    <>
      {messageList.map((message) => (
          <MessageElement 
            key={message._id}
            message={message} 
            onLikeIncreas={handleLikeIncreas}
        />
      ))}
    </>
  );
};

export default MessageList;

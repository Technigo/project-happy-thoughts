import React from "react";

import MessageElement from "./MessageElement"

const MessageList = ({messageList, handleLikeIncreas}) => {
  return (
    <>
      {messageList.map((message) => (
          <MessageElement 
            message={message} 
            onLikeIncreas={handleLikeIncreas}
        />
      ))}
    </>
  );
};

export default MessageList;

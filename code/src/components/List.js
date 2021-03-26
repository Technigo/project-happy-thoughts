import React from "react";

import SingleMessage from "./SingleMessage";

const List = ({ handleHeartsIncrease, messageList }) => {
  return (
    <>
      {messageList.map((message) => (
        <SingleMessage
          key={message._id}
          message={message}
          onHeartsIncrease={handleHeartsIncrease}
        />
      ))}
    </>
  );
};

export default List;

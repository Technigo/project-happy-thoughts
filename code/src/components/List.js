import React from "react";

import SingleMessage from "./SingleMessage";

const List = ({ handleHeartsIncrease, messageList }) => {
  return (
    <div>
      {messageList.map((message) => (
        <SingleMessage
          key={message._id}
          message={message}
          onHeartsIncrease={handleHeartsIncrease}
        />
      ))}
    </div>
  );
};

export default List;

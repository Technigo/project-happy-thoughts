import React from "react";
import LikeBtn from "./LikeBtn";

const ListOfMessages = ({ loading, messages, fetchMessages, messageID }) => {
  if (loading) {
    return <h1>Happy Thoughts Loading...</h1>;
  }

  return (
    <section>
      {messages.map((singleMessage) => (
        <div key={singleMessage._id}>
          <p>{singleMessage.message}</p>
          <p>{singleMessage.hearts}</p>
          <p>{singleMessage.createdAt}</p>
          <LikeBtn
            messageID={messages.id}
            messages={singleMessage}
            fetchMessages={fetchMessages}
          />
        </div>
      ))}
    </section>
  );
};

export default ListOfMessages;

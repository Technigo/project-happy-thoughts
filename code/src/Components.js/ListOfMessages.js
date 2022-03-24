import React from "react";
// import { formatRelative } from "date-fns";

const ListOfMessages = ({ loading, messages }) => {
  if (loading) {
    return <h1>Happy Thoughts Loading...</h1>;
  }
  return (
    <section>
      {messages.map((singleMessage) => (
        <div key={singleMessage._id}>
          <p>{singleMessage.message}</p>
          <p>{singleMessage.createdAt}</p>
          <p>{singleMessage.hearts}</p>
        </div>
      ))}
    </section>
  );
};

export default ListOfMessages;

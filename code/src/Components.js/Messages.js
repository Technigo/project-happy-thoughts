import React, { useState, useEffect } from "react";
// import { formatRelative } from "date-fns";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
    //  console.log('I will be unmounted')
  }, []);

  const fetchMessages = () => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
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

export default Messages;

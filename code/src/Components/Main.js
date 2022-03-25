import React, { useState, useEffect } from "react";

import ListOfMessages from "Components/ListOfMessages";
import NewMessageForm from "Components/NewMessageForm";

export const Main = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleMessageSubmit = (event) => {
    setNewMessage(event.target.value);
  };

  const onNewMessageSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newMessage,
      }),
    };

    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then(() => fetchMessages())
      .finally(() => setNewMessage(""));
  };

  return (
    <section>
      <NewMessageForm
        newMessage={newMessage}
        onMessageSubmit={handleMessageSubmit}
        onNewMessageSubmit={onNewMessageSubmit}
      />
      <ListOfMessages
        loading={loading}
        messages={messages}
        fetchMessages={fetchMessages}
      />
    </section>
  );
};
export default Main;

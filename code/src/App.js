import React, { useState, useEffect } from "react";

import MessageForm from "./components/NewMessageForm/NewMessageForm.component";
import MessageList from "./components/MessageList/MessageList.component";

import { API_URL, LIKES_URL } from "./api/urls";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages.reverse()));
  };

  useEffect(() => {
    fetchMessageList();
  }, []);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: newMessage }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((receivedMessage) =>
        setMessageList([receivedMessage, ...messageList])
      )
      .catch((err) => console.error(err));
  };

  const handleLikesIncrease = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then(() => fetchMessageList())
      .catch((err) => console.error(err));
  };

  return (
    <>
      <MessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
        handleFormSubmit={handleFormSubmit}
      />
      <MessageList
        messageList={messageList}
        handleLikesIncrease={handleLikesIncrease}
      />
    </>
  );
};

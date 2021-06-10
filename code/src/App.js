/*Outer Dependencies */
import React, { useState, useEffect } from "react";

/* Local Dependencies */
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

import { API_URL, LIKES_URL } from "./reusable/urls";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState('');

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((recievedMessages) => setMessageList(recievedMessages))
      .catch((err) => console.error(err));
  };

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: messageNew }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => 
      fetchMessageList(),
      setMessageNew('')
      )
  };

  const handleLikesIncrease = (_id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(_id), options)
      .then((res) => res.json())
      .then(() => fetchMessageList())
  };

  return (
    <div className="happy-thoughts-container">
      <MessageForm
        onFormSubmit={handleFormSubmit}
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}
      />
      <MessageList
        messageList={messageList}
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  );
};

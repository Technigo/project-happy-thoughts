import React, { useState, useEffect } from "react";
import moment from "moment";

import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList"

import { API_URL, LIKES_URL } from "./reusable/urls";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState([]);

  useEffect(() => {
    fetchMessageList();
  }, []);

  // fetch message List
  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages))
      .catch((err) => console.error(err));
  };

  const handelMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  };

  const handelFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: messageNew }),
    };

    // fetch message list with recived message
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((receivedMessage) =>
        setMessageList([...messageList, receivedMessage])
      )
      .catch((err) => console.error(err));
  };

  // likes 
  const handleLikeIncreas = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then((receivedMessage) => {
        const uppdatedMessageList = messageList.map((message) => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1;
          }
          return message
        });
        setMessageList(uppdatedMessageList);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <MessageForm 
        messageNew={messageNew}
        onMessageNewChange={handelMessageNewChange}
        onFormSubmit={handelFormSubmit}
      />
      <MessageList 
        messageList={messageList}
        handleLikeIncreas={handleLikeIncreas}
      />
    </div>
  );
};

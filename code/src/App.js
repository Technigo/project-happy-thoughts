/*Outer Dependencies*/
import React, { useState, useEffect } from "react";

/*Local Dependency*/
import Form from "./components/Form";
import List from "./components/List";

import { URL } from "./reusable/urls";
import { URL_HEARTS } from "./reusable/urls";

/* Main App*/
export const App = () => {
  /*States*/
  const [messageList, setMessageList] = useState([]);
  const [messageNew, setMessageNew] = useState("");

  /*UseEffect*/
  useEffect(() => {
    fetchMessageList();
    console.log("hi!");
  }, []);

  /*fetch for happy thoughts already posted*/
  const fetchMessageList = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages)) /*WHAT*/
      .catch((err) => console.error(err));
  };

  /*Set the content of new message*/
  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  };

  /*Submit of new message*/
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: messageNew }),
    };

    /*fetch for frame of new posts*/
    fetch(URL, options)
      .then((response) => response.json())
      .then((receivedMessage) =>
        setMessageList([receivedMessage, ...messageList])
      );
  };
  const handleHeartsIncrease = (id) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch(URL_HEARTS(id), options)
      .then((res) => res.json())
      .then((receivedMessage) => {
        const updatedMessageList = messageList.map((message) => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1;
          }
          return message;
        });
        setMessageList(updatedMessageList);
      })
      .catch((err) => console.error(err));
  };

  /*What the app returns*/
  return (
    <div>
      <Form
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}
        onFormSubmit={handleFormSubmit}
      />
      <List
        handleHeartsIncrease={handleHeartsIncrease}
        messageList={messageList}
      />
    </div>
  );
};

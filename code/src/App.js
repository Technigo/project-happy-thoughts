import React, { useState, useEffect } from "react";
import moment from "moment";

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

  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  };

  const onFormSubmit = (event) => {
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

  const onLikeIncreas = (id) => {
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
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">Write a message</label>
        <input
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type="submit">send</button>
      </form>
      {messageList.map((message) => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          <button onClick={() => onLikeIncreas(message._id)}>
            {message.hearts}
            ❤️
          </button>
          <p>{moment(message.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

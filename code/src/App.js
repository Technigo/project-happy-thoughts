import React, { useState, useEffect } from "react";

import MessageList from "./components/MessageList/MessageList.component";

import { API_URL } from "./api/urls";

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages));
  };

  useEffect(() => {
    fetchMessageList();
  }, []);

  return (
    <>
      <MessageList messageList={messageList} />
    </>
  );
};

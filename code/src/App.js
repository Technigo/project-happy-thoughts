import React, { useState, useEffect } from "react";

import FormContext from "./components/FormContext/FormContext.component";
import MessageForm from "./components/NewMessageForm/NewMessageForm.component";
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
    <FormContext.Provider value={{ messageList, setMessageList }}>
      <MessageForm />
      <MessageList />
    </FormContext.Provider>
  );
};

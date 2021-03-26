import React, { useState, useEffect } from "react";

import FormContext from "./components/FormContext/FormContext.component";
import NewMessageForm from "./components/NewMessageForm/NewMessageForm.component";
import MessageList from "./components/MessageList/MessageList.component";

import { MainWrapper } from "../src/assets/styles/style";

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
      <MainWrapper>
        <NewMessageForm />
        <MessageList />
      </MainWrapper>
    </FormContext.Provider>
  );
};

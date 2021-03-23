import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import Thought from "./components/Thought";
import { URL } from "./reusable/url";
import "./index.css";

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(URL)
      .then((res) => res.json())
      .then(messages => setMessageList(messages))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Form />
      <Thought messageList={messageList}/>
    </>
  );
};

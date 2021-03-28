import React, { useState, useEffect } from "react";
import moment from 'moment'

import { API_URL } from "./reusable/urls";

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetchMessageList();
  }, []);

  const fetchMessageList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages))
      .catch((err) => console.error(err));
  };

  return (
  <div>
    {messageList.map(message => (
      <div key= {message._id}> 
        <h4>{message.message}</h4>
        <p>{moment(message.createdAt).fromNow()}</p>
      </div>
    ))}
  </div>
  )
}
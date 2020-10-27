import React, { useEffect } from "react";
import MessageCard from "./MessageCard";
import "./messageList.css";

const MessageList = ({ messages, setMessages }) => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // data.reverse();

        // const filteredMessages = data.filter((message) => message.text);
        // setMessages(filteredMessages);
        setMessages(data);
      });
  }, []);

  console.log(messages);
  return (
    <div className="message-list-container">
      {messages.map((message) => {
        // props destructuring ... --> sends as individual props (see MessageCard)
        return <MessageCard {...message} />;
      })}
    </div>
  );
};

export default MessageList;

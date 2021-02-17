import React, { useState, useEffect } from "react";

import { MessageList } from "./components/MessageList";
import { MessageInput } from "./components/MessageInput";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { MESSAGE_URL } from "./urls";

import "./app.css";

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(MESSAGE_URL + "thoughts")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoader(false);
          setMessages(data);
        }, 1000);
      });
  };

  const reachMessageInput = (newMessage) => {
    fetch(MESSAGE_URL + "thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ text: newMessage }),
    }).then(() => fetchMessages());
  };

  const updateLikes = (messageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === messageId) {
        message.likes += 1;
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  const onLiked = (thoughtId) => {
    fetch(MESSAGE_URL + `thoughts/${thoughtId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: "",
    }).then(() => updateLikes(thoughtId));
  };

  return (
    <>
      <Header headerText="Post a happy thought." />
      <div className="main">
        <MessageInput onMessageChange={reachMessageInput} />
        {loader && <Loader />}
        <MessageList messages={messages} onLiked={onLiked} />
      </div>
      {!loader && <Footer author="Petra Almgren" />}
    </>
  );
};

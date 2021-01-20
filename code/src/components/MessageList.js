import React, { useState, useEffect } from "react";

import MessageCard from "./MessageCard";
import Loading from "./Loading";
import "./messageList.css";

const MessageList = ({ messages, setMessages }) => {
  const [loading, setLoading] = useState(true);
  const MESSAGES_URL = "https://jonnas-happy-thoughts.herokuapp.com/thoughts";

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setMessages(data);
          setLoading(false);
        }, 0);
      });
  }, [setMessages]);

  // adding a new like (updates)
  const onLiked = (messageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === messageId) {
        message.likes += 1;
      }
      return message;
    });

    setMessages(updatedMessages);
  };

  return (
    <div className="message-list-container">
      {loading && <Loading />}

      {messages.map((message) => {
        // props destructuring ... --> sends as individual props (see MessageCard)
        return <MessageCard {...message} onLiked={onLiked} />;
      })}
    </div>
  );
};

export default MessageList;

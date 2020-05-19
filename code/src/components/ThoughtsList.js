import React, { useState } from "react";
import { useEffect } from "react";
import moment from "moment"; /* To format date */
import "./ThoughtsList.css";
import { LikeButton } from "./LikeButton";

export const ThoughtsList = () => {
  const thoughtsUrl = "https://elins-happy-thoughts-api.herokuapp.com/thoughts";

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ask the server for the messages using a GET requests
    fetch(thoughtsUrl)
      .then((res) => {
        // Get the JSON of the response body
        return res.json();
      })
      .then((data) => {
        // State based on the response
        setMessages(data);
        setLoading(false);
      });
  }, []);

  //Shows likes on thoughts
  const onMessageLiked = (likedMessageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === likedMessageId) {
        message.hearts += 1;
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  return (
    <section className="messages">
      {loading && <h3>There will be messages that make you happy soon ... </h3>}

      {
        // Each message returned
        messages.map((message) => (
          <section key={message._id} className="message-card">
            <p className="message"></p>
            {message.message}
            <div className="message-card-footer">
              <LikeButton
                likes={message.hearts}
                id={message._id}
                message={message}
                onMessageLiked={onMessageLiked}
              />{" "}
              x {message.hearts}
              <span className="message-time">
                {moment(message.createdAt).fromNow()}
              </span>
            </div>
          </section>
        ))
      }
    </section>
  );
};

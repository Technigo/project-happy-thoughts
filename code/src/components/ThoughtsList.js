import React, { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import "./ThoughtsList.css";

export const ThoughtsList = () => {
  const thoughtsUrl = "https://technigo-thoughts.herokuapp.com/";
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ask the server for the messages using a GET requests
    fetch(thoughtsUrl)
      .then(res => {
        // Get the JSON of the response body
        return res.json();
      })
      .then(data => {
        // State based on the response
        setMessages(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="messages">
      {loading && <h3>There will be messages that make you happy soon ... </h3>}

      {// Each message returned
      messages.map(message => (
        <section key={message._id} className="message-card">
          <p className="message"></p>
          {message.message}
          <div className="message-card-footer">
            <span className="hearts">x{message.hearts}</span>
            <span className="message-time">
              {moment(message.createdAt).fromNow()}
            </span>
          </div>
        </section>
      ))}
    </section>
  );
};

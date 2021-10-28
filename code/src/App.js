import React, { useState, useEffect } from "react";

import Form from "./Form";
import SingleThought from "./SingleThought";

import { API_URL, API_LIKE_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [message, setMessage] = useState("");

  // Function that fetches the messages from API and sets the state property to hold the data returned
  const getMessages = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("WE are fetching from API");
        setThoughts(data);
      });
  };
  // This function will post the message to API
  const postMessage = (messageToPost) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageToPost,
      }),
    })
      .then((response) => response.json())
      .then((data) => getMessages());
  };

  // Function to post a message on the API
  const likeThisThought = (id) => {
    fetch(API_LIKE_URL(id), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getMessages();
      });
  };

  // Here we start to execute the app flow

  // Calling the getMessages on the mounting of the App component
  useEffect(() => getMessages(), []);
  console.log("MOUNTING");
  if (thoughts.length === 0) {
    return <div>Locating satellites!</div>;
  }

  return (
    <div>
      <div className="card">
        <Form
          message={message}
          postMessage={postMessage}
          setMessage={setMessage}
        />
      </div>

      {thoughts.map((oneThought) => (
        <SingleThought
          key={oneThought._id}
          oneThought={oneThought}
          likeThisThought={likeThisThought}
        />
      ))}
    </div>
  );
};

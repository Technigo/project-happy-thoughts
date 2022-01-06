import React, { useState, useEffect } from "react";

import Form from "./Form";
import SingleThought from "./SingleThought";

import { API_URL, API_LIKE_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [likedThoughts, setLikedThoughts] = useState([]);

  // Function that fetches the messages from API and sets the state property to hold the data returned
  const getMessages = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("WE are fetching from API");
        setThoughts(data);
        setLoading(false);
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
      .then((data) => {
        if (data.message === "Could not save thought") {
          setError(true);
        }
        getMessages();
      });
  };

  // Function to post a message on the API
  const likeThisThought = (id) => {
    fetch(API_LIKE_URL(id), {
      method: "PATCH",
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
  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <div className="likes-counter">
        <h2 className="likes-text">
          Today you have liked {likedThoughts.length} happy thoughts
        </h2>
      </div>
      <div className="card form">
        <Form
          message={message}
          postMessage={postMessage}
          setMessage={setMessage}
          error={error}
        />
      </div>

      {thoughts.map((oneThought) => (
        <SingleThought
          key={oneThought._id}
          oneThought={oneThought}
          likeThisThought={likeThisThought}
          likedThoughts={likedThoughts}
          setLikedThoughts={setLikedThoughts}
        />
      ))}
    </div>
  );
};

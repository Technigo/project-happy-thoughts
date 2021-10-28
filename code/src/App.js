import React, { useState, useEffect } from "react";
import moment from "moment";

import { ReactComponent as Heart } from "./images/heart.svg";

const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
let API_LIKE_URL = "";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [message, setMessage] = useState("");

  // Function that fetches the messages from API and sets the state property to hold the data returned
  const getMessages = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setThoughts(data));
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
    API_LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;
    fetch(API_LIKE_URL, {
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
      <div className="thought-card">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            postMessage(message);
          }}
        >
          <label>
            Please share a happy thought!
            <textarea
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="text-input"
            ></textarea>
          </label>
          <button type="submit">Add a happy thought!</button>
        </form>
      </div>
      {thoughts.map((singleThought) => (
        <div key={singleThought._id} className="thought-card">
          <p>{singleThought.message}</p>
          <p>{moment(singleThought.createdAt).fromNow()}</p>
          <div>
            <button
              className="heart-link"
              onClick={() => {
                likeThisThought(singleThought._id);
              }}
            >
              <Heart className="icon" />
            </button>
            <span id={singleThought._id}>{singleThought.hearts}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

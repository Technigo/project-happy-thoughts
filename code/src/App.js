import React, { useState, useEffect } from "react";

import { FormInput } from "./components/FormInput";
import { MessageList } from "./components/MessageList";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Animation } from "./components/Animation";

import { API_URL, LIKES_URL } from './reusables/urls';

export const App = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    fetchAllMessages();
  }, []);

  // Fetching all the thoughts
  const fetchAllMessages = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => {
        setMessageList(messages);
        setLoading(false);
        setAnimation(false);
      })
    .catch(err => console.error(err));  
  }

  // Clicking the submit button, posting message
  const handleMessageSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ message: newMessage }),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then((message) => {
      // If error -> set loading spinner, error function and then fetch messages
      if (message.errors) {
        setLoading(true);
        handleErrors(message);  
        fetchAllMessages();
      } else {
          // No error -> set animation instead of loading spinner, reset textarea and error message and delay fetching so animation can play out :)
          setLoading(false);
          setAnimation(true);
          setNewMessage("");
          setErrorMessage("");
          setTimeout(() => fetchAllMessages(), 1500);
        }
    })  
    .catch(err => console.error(err));
  }

  // Function for setting error message
  const handleErrors = (error) => {
    const errorType = error.errors.message.kind;
    if (errorType === "required") {
      setErrorMessage("You can't send an empty thought!");
    } else if (errorType === "minlength") {
      setErrorMessage("Too short! You need a minimum of 5 characters");
    } else if (errorType === "maxlength") {
      setErrorMessage("Too long! You can have max 140 characters");
    } else {
      setErrorMessage(error.message);
    }
  }

  // Fetching likes
  const handleLikeClick = (id) => {
    fetch(LIKES_URL(id), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(() => fetchAllMessages())
    .catch(err => console.log(err));
  }


  return (
    <main className="main-container">
      <FormInput 
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        onMessageSubmit={handleMessageSubmit}
        errorMessage={errorMessage} />
      { animate && <Animation /> }
      { loading && <LoadingSpinner /> }
      <MessageList
        messageList={messageList}
        handleLikeClick={handleLikeClick} />
    </main>
  )
}


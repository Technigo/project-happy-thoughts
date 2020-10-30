import React, { useState, useEffect } from "react";

import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

export const App = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);
  const [likes, setLikes] = useState(0);

  //create array state that stores id of all liked posts. Use local storage to preserve and initialize on page load
  
  const [likedThoughts, setLikedThoughts] = useState( 
    JSON.parse(localStorage.getItem("Likes")) || []
  );

  //post like to API, update likedthoughts array

  const messageLike = (id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setLikes(likes + 1);
        setLikedThoughts([id, ...likedThoughts]);
      })
  };

  //only update local storage once likedThoughts state have been updated. local storage needs string so convert with JSON.stringify

  useEffect(() => {
    localStorage.setItem("Likes", JSON.stringify(likedThoughts));
  }, [likedThoughts]);

  //fetch thoughts on page load and everytime likes are updated...
  
  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, [likes]);

  return (
    <div className="main-container">
      <MessageForm messages={messages} setMessages={setMessages} />
      <MessageList
        messages={messages}
        messageLike={messageLike}
        likedThoughts={likedThoughts}
      />
    </div>
  );
};

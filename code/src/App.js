import React, { useState, useEffect, useCallback, useRef } from "react";

import { API_URL, LIKES_URL } from "./reusable/urls";
import { MessageList } from "./components/MessageList";
import { MessageForm } from "./components/MessageForm";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState(false);
  const [charRange, setCharRange] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [keypressCount, setKeypressCount] = useState(0);
  const thisRef = useRef();


  /*fetches the list of all tweets*/

  const fetchMessageList = useCallback(() => {// callback to avoid re-rendering of dependencies
    let previousMessage;

    fetch(API_URL)
      .then(setLoading(true)) //to show loading symbol
      .then((res) => res.json())
      .then((messages) => {
        setLoading(false);

        /*checks if the newest message is a new message, if so 
        setNewMessage to true (to be able to use different css class 
          and do animation on the new message when appearing)*/
        thisRef.current = messages[0].message;
        previousMessage === thisRef.current
          ? setNewMessage(false)
          : setNewMessage(true);

        setMessageList(messages);
      })
      .then((previousMessage = thisRef.current)) //useRef to store last message
      .catch((error) => console.log(error));
  }, [setMessageList]);

  /*setting interval in callback + using useEffect because of multiple re-render problems*/
  const refreshMessageList = useCallback(() => {
    const refresh = setInterval(fetchMessageList, 5000);
    setInterval(fetchMessageList, 5000);
    clearInterval(refresh);
  }, [fetchMessageList]);

  useEffect(() => {
    refreshMessageList();
  }, [refreshMessageList]);


  /* fetches+post the message user puts in the textarea */

  const fetchNewMessage = () => {
    const post = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    };

    fetch(API_URL, post)
      .then((res) => res.json())
      .then((newMessage) => {
        setNewMessage(true);
        setMessageList((previousMessages) => [newMessage, ...previousMessages]);
        clearAll();
      })
      .catch((error) => console.log(error));
  };


  /*fetches+post amount of likes */

  const fetchLikes = (messageID, liked) => {
    const post = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    };

    /* if liked is true -> likes by one. Else (if you already liked this)
    it will be decreased (get unliked)*/
    fetch(LIKES_URL(messageID), post)
      .then((res) => res.json())
      .then((likedMessage) => {
        const newMessageList = messageList.map((message) => {
          if (message._id === likedMessage._id) {
            liked ? (message.hearts -= 1) : (message.hearts += 1);
          }
          return message;
        });

        setMessageList(newMessageList);
      })
      .catch((error) => console.log(error));
  };

  //clears all needed input
  const clearAll = () => {
    setUserInput("");
    setCharRange(false);
    setKeypressCount("0");
  };

  return (
    <main>
      <div className="wrapper">
        <MessageForm
          fetchNewMessage={fetchNewMessage}
          charRange={charRange}
          setCharRange={setCharRange}
          userInput={userInput}
          setUserInput={setUserInput}
          keypressCount={keypressCount}
          setKeypressCount={setKeypressCount}
        />
        <MessageList
          fetchLikes={fetchLikes}
          messageList={messageList}
          setMessageList={setMessageList}
          newMessage={newMessage}
          loading={loading}
        />
      </div>
    </main>
  );
};

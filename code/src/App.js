import React, { useState, useEffect, useCallback, useRef } from "react";

import { API_URL, LIKES_URL } from "./reusable/urls";
import { MessageList } from "./components/MessageList";
import { MessageForm } from "./components/MessageForm";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userInput, setUserInput] = useState("");
  const [keypressCount, setKeypressCount] = useState(0);
  const [charRange, setCharRange] = useState(false);
  const [loading, setLoading] = useState(true);
  const messageRef = useRef();


  /*-------------fetches the list of all tweets--------------*/

  const fetchMessageList = useCallback(() => {// callback to avoid re-rendering of dependencies
    messageList===""
    ?setLoading(true)
    :setLoading(false)//to show loading symbol when loading page

    fetch(API_URL)
      .then((res) => res.json())
      .then((messages) => {
        
        /*checks if the newest message is a new message, if so 
        setNewMessage to that message (to be able to use different css class 
          and do animation on the new message when appearing)*/
          messageRef.current === messages[0].message
          ? setNewMessage("")
          : setNewMessage(messages[0])

        setMessageList(messages);
        return messages
      })
      .then(messages => messageRef.current = messages[0].message) //useRef to store last message
      .catch((error) => alert(`Error while loading messages:${error}`));
  }, [setMessageList, messageList]);

    /*setting interval in callback + using useEffect because of multiple re-render problems*/
    const refreshMessageList = useCallback(() => {
      const refresh = setInterval(fetchMessageList, 5000);
  
      setInterval(fetchMessageList, 5000);
      clearInterval(refresh);
    }, [fetchMessageList]);
  
    useEffect(() => {
      refreshMessageList();
    }, [refreshMessageList]);
  


  /* --------fetches+post the message user puts in the textarea ---------*/

  const fetchNewMessage = () => {
    const post = {
      method: "POST",
      headers: {
        "content-type": "application/json"   
      },
      body: JSON.stringify({ message: userInput })
    };

    fetch(API_URL, post)
      .then((res) => res.json())
      .then((newMessage) => {
        setNewMessage(newMessage);

      /*   messageRef.current=newMessage //to avoid double animation of this new post */

        setMessageList((previousMessages) => [newMessage, ...previousMessages]);
        clearAll();
      })
      .catch((error) => alert(`Error while loading messages:${error}`));
  };



  /*------------fetches+post amount of likes -----------*/

  const fetchLikes = (messageID, liked) => {
    const post = {
      method: "POST",
      headers: {
        "content-type": "application/json"
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
      .catch((error) => alert(`Error while loading messages:${error}`));
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

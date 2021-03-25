/*Outer Dependencies*/
import React, { useState, useEffect } from "react";

/*Local Dependency*/
import { API_FETCH } from "./reusable/urls";
// import { API_POST } from "./reusable/urls";

/* Main App*/
export const App = () => {
  /*States*/
  const [messageList, setMessageList] = useState(
    []
  ); /*Should be empty array as it will be non empty-array later*/

  const [messageNew, setMessageNew] = useState("");

  /*UseEffect*/
  useEffect(() => {
    fetchMessageList();
    console.log("hi!");
  }, []);

  /*fetch for happy thoughts already posted*/
  const fetchMessageList = () => {
    fetch(API_FETCH)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages)) /*WHAT*/
      .catch((err) => console.error(err));
  };

  /*Set the content of new message*/
  const onMessageNewChange = (event) => {
    setMessageNew(event.target.value);
  };

  /*Submit of new message*/
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: messageNew }),
    };

    console.log(messageNew);
    /*fetch for frame of new posts*/
    fetch(API_FETCH, options)
      .then((response) => response.json())
      .then((receivedMessage) =>
        setMessageList([...messageList, receivedMessage])
      );
  };

  /*What the app returns*/
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage">Write new message!</label>
        <input
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type="submit">Send Message!</button>
      </form>
      {messageList.map((message) => (
        <div key={message._id}>
          <h4>{message.message}</h4>
          {/* <p className="date"> - {moment(message.created).fromNow()}</p> */}
        </div>
      ))}
    </div>
  );
};

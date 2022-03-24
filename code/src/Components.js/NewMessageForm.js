import React, { useState } from "react";

const NewMessageForm = () => {
  const [newMessage, setNewMessage] = useState("");

  const onMessageSubmit = (event) => {
    setNewMessage(event.target.value);
  };

  const onNewMessageSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: newMessage,
      }),
    };

    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
    .then(res => res.json())
    .then(data => console.log(data))
  };

  return (
    <form onSubmit={onNewMessageSubmit}>
      <h1>What´s making you happy right now?</h1>
      <textarea value={newMessage} onChange={onMessageSubmit} />
      <button type="submit">Send Happy Thought</button>
    </form>
  );
};

export default NewMessageForm;

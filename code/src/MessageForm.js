import React, { useState, } from "react";
import { MessageList } from "./MessageList";

export const MessageForm = (props) => {
  const [thoughts, setThoughts] = useState(props.messages);
  const [input, setInput] = useState("");

  console.log(thoughts)

  const handleInput = (input) => {
    setInput(input);
  };

  // of 'Hello world' like this example does):
  // // // Send the POST request with the input from your form (instead
  const handleFormSubmit = (event, input) => {
    event.preventDefault();  
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((newThought) => {
        console.log(newThought);
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array:
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
        console.log(thoughts)
        return (<MessageList messages={thoughts} />)
      });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e, input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

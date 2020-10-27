import React, { useState } from "react";
import { HandleFormSubmit } from "./HandleFormSubmit";
import { MessageList } from "./MessageList";

export const App = () => {
  const [input, setInput] = useState("");
  const [thoughts, setThoughts] = useState([]);

  const handleFormSubmit = (event, input) => {
    let newThoughts = [];

    event.preventDefault();

    // of 'Hello world' like this example does):
    // // // Send the POST request with the input from your form (instead
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
        setThoughts([newThought]);
        //setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      });
  };

  console.log(thoughts)

  const handleInput = (input) => {
    setInput(input);
  };

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
      <MessageList />
    </div>
  );
};

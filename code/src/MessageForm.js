import React, { useState } from "react";

export const MessageForm = (props) => {
  
  const [input, setInput] = useState("");  

  const handleFormSubmit = (event, input) => {
    event.preventDefault();  
    fetch("https://project-happythoughts-api-olof.herokuapp.com/thoughts", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
      .then((newThought) => {
        if(newThought.errors) alert(newThought.errors.message.message)
        else
        props.setMessages([newThought, ...props.messages])
      })
      setInput("");
  }

  return (
    <div className="form-container">
      
      <form className="input-form"
        onSubmit={(e) => {
          handleFormSubmit(e, input);
        }}
      >
        <label>What's making you happy right now?</label>
        <textarea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <span className="char-counter" style={{color: input.length > 140 ? 'red' : 'black'}}>{input.length} / 140</span>
        <button className="form-button" type="submit">❤️ &nbsp; Send Happy Thought  &nbsp;❤️</button>
      </form>
    </div>
  );
};

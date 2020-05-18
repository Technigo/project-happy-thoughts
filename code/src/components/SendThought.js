import React, { useState } from "react";
import { MessageCount } from "./MessageCount";

export const SendThought = ({
  thoughts,
  setThoughts,
  theme,
  setTheme,
  setPage,
}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("Anonymous");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`https://perssons-happy-thoughts.herokuapp.com/thoughts`, {
      method: "POST",
      body: JSON.stringify({
        message: message,
        name: name,
        theme: theme,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
      });

    //Clears textarea after message is sent
    setMessage("");
    setName("");
    setPage(1);
  };

  // Does not allow empty (only space) messages
  const isMessageEmpty = (value) => value.replace(/\s/g, "").length === 0;

  return (
    <section className="send-thought-container">
      <form>
        <div className="wrapper-row">
          <div className="wrapper-optional-left">
            <p className="p-header">Who are you?</p>
            <input
              className="thought-input-name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              name="thought"
              type="text"
              placeholder="Anonymous?"
            />
          </div>
          <div className="wrapper-optional-right">
            <p className="p-header">What are you thinking about?</p>
            <select
              className="selector"
              type="text"
              onChange={(event) => setTheme(event.target.value)}
              value={theme}
            >
              <option value="">Choose a theme</option>
              <option value="">Traveling</option>
              <option value="🏝">🏝</option>
              <option value="🛩">🛩</option>
              <option value="⛴">⛴</option>
              <option value="">Animals</option>
              <option value="🐶">🐶</option>
              <option value="🦛">🦛</option>
              <option value="🦊">🦊</option>
              <option value="">Kids</option>
              <option value="👶🏼">👶🏼</option>
              <option value="">Food & Drinks</option>
              <option value="🍔">🍔</option>
              <option value="🍻">🍻</option>
              <option value="🍕">🍕</option>
              <option value="🍾">🍾</option>
              <option value="">Code</option>
              <option value="👩🏼‍💻">👩🏼‍💻</option>
              <option value="👨🏽‍💻">👨🏽‍💻</option>
              <option value="🧑🏻‍💻">🧑🏻‍💻</option>
            </select>
          </div>
        </div>
        <p className="p-header">What's making you happy right now?</p>
        <textarea
          className="thought-input-text"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          name="thought"
          type="text"
          placeholder="Write your happy thought..."
          value={message}
        />
        <div className="btn-and-count-container">
          <input
            onClick={handleFormSubmit}
            className="two-hearts-button"
            type="button"
            value="❤️ Send Happy Thought ❤️"
            disabled={
              message.length < 5 ||
              message.length > 140 ||
              isMessageEmpty(message)
            }
          />
          <MessageCount charCount={message.length} />
        </div>
      </form>
    </section>
  );
};

import React, { useState, useEffect } from "react";
import { NewMessage } from "NewMessage";
import { ButtonMessage } from "ButtonMessage";
import { Hearts } from "Hearts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newMessage, setNewMessage] = useState();

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => json.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
      .then(json => {
        setThoughts(json);
      });
  }, []);

  const addThought = event => {
    event.preventDefault();
    if (!newMessage) return;
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: newMessage
      })
    })
      .then(res => res.json())
      .then(json => {
        const newThoughts = [...thoughts, json].sort((a, b) =>
          a.createdAt < b.createdAt ? 1 : -1
        );
        setThoughts(newThoughts);
        setNewMessage("");
      });
  };

  return (
    <main className="container">
      <form className="form-container">
        <div className="form-container--content">
          <p>What´s making you happy right now?</p>
          <NewMessage newMessage={newMessage} setNewMessage={setNewMessage} />
          <ButtonMessage onClick={addThought} />
        </div>
      </form>
      <div className="messages">
        <ul>
          {thoughts.map(thought => {
            return (
              <div key={thought._id}>
                <Hearts
                  id={thought._id}
                  hearts={thought.hearts}
                  message={thought.message}
                  time={thought.createdAt}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

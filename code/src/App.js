import React, { useState, useEffect } from "react";
import { NewMessage } from "NewMessage";
import { ButtonMessage } from "ButtonMessage";
import { Hearts } from "Hearts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newMessage, setNewMessage] = useState();
  // const [thisId, setThisId] = useState();
  // const [like, setLike] = useState(like);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => json.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
      .then(json => {
        // console.log(json);
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
        // console.log(newThoughts);
        setNewMessage("");
      });
  };

  return (
    <main className="container">
      <div className="main-message-container">
        <p>What´s making you happy right now?</p>
        <NewMessage newMessage={newMessage} setNewMessage={setNewMessage} />
        <ButtonMessage onClick={addThought} />
      </div>
      <div className="messages">
        <ul>
          {thoughts.map(thought => {
            return (
              <li key={thought.message} className="message-li">
                <p>{thought.message}</p>
                <Hearts id={thought._id} hearts={thought.hearts} />x{" "}
                {thought.hearts}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="messages"></div>
    </main>
  );
};

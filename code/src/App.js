import React, { useState, useEffect } from "react";
import { NewMessage } from "NewMessage";
import { ButtonMessage } from "ButtonMessage";
import { Hearts } from "Hearts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => json.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
      .then(json => {
        setThoughts(json);
      });
    setLoading(false);
  }, []);

  const addThought = event => {
    event.preventDefault();

    if (!newMessage) {
      setError(true);
    } else {
      setError(false);
    }

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

  const onLiked = thoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  return (
    <main>
      {error && <div className="error">Error! Please try again</div>}
      <form className="form-container">
        <div className="form-container--content">
          <p>What´s making you happy right now?</p>
          <NewMessage newMessage={newMessage} setNewMessage={setNewMessage} />
          <ButtonMessage onClick={addThought} />
        </div>
      </form>
      <div className="messages">
        {loading && <div className="loading">loading...</div>}
        <ul>
          {thoughts.map(thought => {
            return (
              <div key={thought._id}>
                <Hearts
                  id={thought._id}
                  hearts={thought.hearts}
                  message={thought.message}
                  time={thought.createdAt}
                  onLiked={onLiked}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

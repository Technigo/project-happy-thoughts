import React, { useState, useEffect } from "react";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json));
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();

    // Send the POST request with the input from your form (instead
    // of 'Hello world' like this example does):
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ newThought })
    })
      .then(res => res.json())
      .then(newThought => {
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array:
        setThoughts(previousThoughts => [newThought, previousThoughts]);
      });
  };

  return (
    <>
      <form>
        <section className="post-wrapper">
          <div className="new-post">
            <h2>What's making you happy right now?</h2>
            <label>
              <input
                type="text"
                onChange={event => setNewThought(event.target.value)}
                value={newThought}
              />
            </label>
            <button type="submit" onClick={event => handleFormSubmit()}>
              <span role="img" aria-label="heart">
                ❤️ Send Happy Thought ❤️
              </span>
            </button>
          </div>
        </section>
      </form>

      {thoughts.map(thought => (
        <div className="card" key={thought._id}>
          <p>{thought.message}</p>
          {thought.createdAt}
        </div>
      ))}
    </>
  );
};

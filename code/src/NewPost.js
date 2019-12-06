import React, { useState, useEffect } from "react";
import { ThoughtsList } from "ThoughtsList";

export const NewPost = () => {
  const [newThought, setNewThought] = useState("");
  const [thoughts, setThoughts] = useState([]);

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
      body: JSON.stringify({ message: newThought }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(createdThought => {
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array:
        setThoughts(previousThoughts => [createdThought, ...previousThoughts]);
        setNewThought("");
      });
  };

  const onThoughtLiked = likedThoughtId => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1;
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  };

  return (
    <div>
      <form>
        <section className="post-wrapper">
          <div className="new-post">
            <h2>What's making you happy right now?</h2>
            <label>
              <textarea
                rows="3"
                onChange={event => setNewThought(event.target.value)}
                value={newThought}
              />
            </label>
            <button
              type="submit"
              className="submit-button"
              onClick={handleFormSubmit}
              disabled={
                newThought.length < 5 || newThought.length > 140 ? true : false
              }
            >
              <span role="img" aria-label="heart">
                ❤️ Send Happy Thought ❤️
              </span>
            </button>
            <p> {newThought.length} / 140</p>
          </div>
        </section>
      </form>

      {thoughts.map(thought => {
        return (
          <ThoughtsList
            key={thought._id}
            id={thought._id}
            message={thought.message}
            hearts={thought.hearts}
            createdAt={thought.createdAt}
            onThoughtLiked={onThoughtLiked}
          />
        );
      })}
    </div>
  );
};

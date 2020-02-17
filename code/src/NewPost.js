import React, { useState, useEffect } from "react";
import { ThoughtsList } from "ThoughtsList";

export const NewPost = () => {
  const [newName, setNewName] = useState("")
  const [newThought, setNewThought] = useState("");
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jenny-happy-api.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json));
    setLoading(false);
  }, []);

  // https://technigo-thoughts.herokuapp.com/

  const handleFormSubmit = event => {
    event.preventDefault();

    // Sends the POST request with the input from the form
    fetch("https://jenny-happy-api.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ name: (newName || 'Anonymous'), message: newThought }),
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
    <section className="post-wrapper">
      <form>
        {loading && (
          <h2>
            Don't worry, happy thoughts coming your way
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </h2>

        )}

        <article className="new-post">
          <label className="name-label">
            <h2>Name</h2>
            <input label="name" type="text"
              onChange={(event) => setNewName(event.target.value)}
              value={newName}
            />
          </label>
          <h2>What's making you happy right now?</h2>
          <label>
            <textarea
              rows="3"
              onChange={event => setNewThought(event.target.value)}
              value={newThought}
            />
          </label>
          <p> {newThought.length} / 140</p>
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
        </article>
      </form>

      {thoughts.map(thought => {
        return (
          <ThoughtsList
            key={thought._id}
            id={thought._id}
            name={thought.name}
            message={thought.message}
            hearts={thought.hearts}
            createdAt={thought.createdAt}
            onThoughtLiked={onThoughtLiked}
          />
        );
      })}
    </section>
  );
};

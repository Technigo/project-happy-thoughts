import React, { useEffect, useState } from "react";
import moment from "moment";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  console.log(thoughts);
  return (
    <div>
      <div className="form">
        <p>What's making you happy right now?</p>
        <form>
          <label></label>
          <input
            className="input"
            type="text"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
          />
        </form>
        <button className="send-btn">
          <span className="send-heart">❤</span>Send happy thought
          <span className="send-heart">❤</span>
        </button>
      </div>

      {thoughts.map((thought) => (
        <div className="thoughts" key={thought._id}>
          <p>{thought.message}</p>
          <button className="btn">
            <span>❤</span>
          </button>
          <p>x{thought.hearts} </p>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};

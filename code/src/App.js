import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL } from "./utils/urls";

function App() {
  // * * * * * states * * * * *
  const [newThought, setNewThought] = useState("");
  const [thoughts, setThoughts] = useState([]);
  console.log("här kan jag skriva uaf");
  console.log(newThought);

  // * * * * * useEffect * * * * *
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setThoughts(data);
      });
  }, []);

  // * * * * * function * * * * *
  const onFormSubmit = e => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ message: newThought }),
      // we have to wrapp it to able to send it (other way around from getting it)
    };

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => {
        console.log("this is fetch2 with POST", data);
        setThoughts([data, ...thoughts]);
      });
  };

  const onSetThoughtChange = e => {
    setNewThought(e.target.value);
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="question-card">
        <div>
          <label htmlFor="newThought" className="question">
            What is making you happy right now?
          </label>
          <input
            id="newThought"
            type="text"
            placeholder="Type your happy thougt here"
            value={newThought}
            onChange={onSetThoughtChange}
          ></input>
        </div>
        <button className="submit-btn" type="submit">
          <span className="icon-btn">&hearts;</span>Send Happy Thought
          <span className="icon-btn">&hearts;</span>
        </button>
      </form>

      {thoughts.map(thought => {
        return (
          <>
            <div className="answer-card">
              <div className="answer">
                <p>{thought.message}</p>
                <button className="heart-btn">
                  {" "}
                  <span className="heart">&hearts;</span> x {thought.hearts}
                </button>
                <p className="date">
                  -Created at: {moment(thought.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </>
        );
      })}

      <div> icon</div>
    </>
  );
}

export default App;

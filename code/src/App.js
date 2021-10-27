import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL, API_HEART } from "./utils/urls";

function App() {
  // * * * * * states * * * * *
  const [newThought, setNewThought] = useState("");
  const [thoughts, setThoughts] = useState([]);

  console.log("this is newThought", newThought);

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

    setNewThought("");
  };

  const onSetThoughtChange = e => {
    setNewThought(e.target.value);
  };

  const heartCounter = thought_id => {
    console.log("this is thought_id", thought_id);

    const options = {
      method: "POST",
      // if there is no body we dont need a header
    };

    fetch(API_HEART(thought_id), options)
      .then(res => res.json())
      .then(data => {
        console.log("this is fetch3 HEART with POST", data);

        const updatedThoughts = thoughts.map(item => {
          if (thought_id === item._id) {
            console.log("this is the one", item._id);
            item.hearts += 1;
            return item;
          } else {
            console.log("this is no new");
            return item;
          }
        });
        console.log(updatedThoughts);
        setThoughts(updatedThoughts);
      });
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
          <span role="img" aria-label="heart-emoji" className="icon-btn">
            ❤️
          </span>
          Send Happy Thought
          <span role="img" aria-label="heart-emoji" className="icon-btn">
            ❤️
          </span>
        </button>
      </form>
      {/* * * * * * * * * * * * CARDS * * * * * * * * * */}

      {thoughts.map(thought => {
        return (
          <>
            <div key={thought._id} className="answer-card">
              <div className="answer">
                <p>{thought.message}</p>
                <button
                  onClick={() => heartCounter(thought._id)}
                  className="heart-btn"
                >
                  {" "}
                  <span role="img" aria-label="heart-emoji" className="heart">
                    ❤️
                  </span>{" "}
                  x{thought.hearts}
                </button>
                <p className="date">
                  -Created at: {moment(thought.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;

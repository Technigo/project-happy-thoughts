import React, { useEffect, useState } from "react";
import moment from "moment";
import { API_URL } from "./utils/urls";
// import Like from "Components/Like";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [count, setCount] = useState(0); /**varijabla za timer */

  const handleIncrement = () =>
    setTimeout(() => setCount((currentCount) => currentCount + 1), 500);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  const onFormSubmitt = (event) => {
    event.preventDefault();

    const thoughts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };
    fetch(API_URL, thoughts)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      {/* <Like onStepChange={onStepChange} /> */}
      <div className="form">
        {/* <p>What's making you happy right now?</p> */}
        <form onSubmit={onFormSubmitt}>
          <label htmlFor="newThought">
            What's is making you happy right now?
          </label>
          <input
            id="newThought"
            className="input"
            type="text"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
          />
          <button onClick={handleIncrement} type="submit" className="send-btn">
            <span className="send-heart">❤</span>
            Send happy thought
            <span className="send-heart">❤</span>
            {count}times
          </button>
          {/* <h3>{count}</h3> */}
        </form>

        {/* <button type="submit" className="send-btn">
          <span className="send-heart">❤</span>Send happy thought
          <span className="send-heart">❤</span>
        </button> */}
      </div>

      {thoughts.map((thought) => (
        <div className="thoughts" key={thought._id}>
          <div className="thoughts-card">
            <p>{thought.message}</p>
            <div className="thoughts-container">
              <button type="submit" className="btn">
                <span>❤</span>
              </button>
              <p>x{thought.hearts} </p>
              <p className="date">{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ); // const [step, setStep] = useState(0);
  // const onStepChange = () => {
  //   setStep(step + 1);
  // };

  // const onNewThoughInputChange = (event) => {
  //   setNewThought(event.target.value);
  // };
};

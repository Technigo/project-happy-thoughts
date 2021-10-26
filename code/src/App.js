import React, { useEffect, useState } from "react";
import { API_URL } from "utils/urls";
import moment from "moment";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [heart, setHeart] = useState("");

  //fetching the API with the useEffect hook and sets the value to the state throw setThoughts
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setHeart(data));
  }, []);

  console.log(heart);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought }),
      //JSON.stringify is the package you need to let the code travel to the backend of the app, its like sending a package with post nord, you need to wrap the package before you send it.
    };
    //The POST request. Inside the the post request we need two arguments, the option variable above is just created because ti looked messy to have it inside of the fetch...
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
    //The three dots mean spread and it basically mean that you have two glasses you want to combine.
  };

  return (
    <>
      <header>
        <h1>Happy thoughts!</h1>
      </header>

      {/* Mounting the values from the API throw the state hooks value "thoughts" */}
      <div className="container">
        <form className="thoughts newThought" onSubmit={onFormSubmit}>
          <div className="form-container">
            <label htmlFor="newThought">
              <p>What's making you happy right now? </p>
            </label>
            <input
              id="newThought"
              type="text"
              value={newThought}
              onChange={(event) => setNewThought(event.target.value)}
            />
            <button className="send-button" type="submit">
              <p>
                <span role="img" aria-label="heart emoji">
                  {" "}
                  ❤️{" "}
                </span>{" "}
                Send happy Thought!{" "}
                <span role="img" aria-label="heart emoji">
                  {" "}
                  ❤️{" "}
                </span>
              </p>
            </button>
          </div>
        </form>

        {thoughts.map((thoughts) => (
          <div className="thoughts grid" key={thoughts._id}>
            <p className="message">{thoughts.message}</p>
            <div>
              <button className="heart">
                <span role="img" aria-label="heart emoji">
                  ❤️
                </span>
              </button>
              x {thoughts.hearts}
            </div>
            <p className="date">{moment(thoughts.createdAt).fromNow()}</p>
          </div>
        ))}
      </div>
      <footer>
        <h1>
          Hedvig Mejstedt
          <span role="img" aria-label="lion emoji">
            🦁
          </span>
        </h1>
      </footer>
    </>
  );
};

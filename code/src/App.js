import React, { useState, useEffect } from "react";
import moment from "moment";
import { API_URL, API_HEART } from "./utils/urls";
import Form from "components/Form";
import ThoughtsCard from "components/ThoughtsCard";
import Loading from "components/Loading";

function App() {
  // * * * * * states * * * * *
  const [newThought, setNewThought] = useState("");
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  // * * * * * useEffect * * * * *
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data))
      .finally(() => setLoading(false));
  }, []);

  // * * * * * function * * * * *
  // 1
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
        setThoughts([data, ...thoughts]);
      });

    setNewThought("");
  };
  // 2

  const onSetThoughtChange = e => {
    setNewThought(e.target.value);
  };

  // 3

  const heartCounter = thought_id => {
    const options = {
      method: "POST",
      // if there is no body we dont need a header
    };

    fetch(API_HEART(thought_id), options)
      .then(res => res.json())
      .then(data => {
        const updatedThoughts = thoughts.map(item => {
          if (thought_id === item._id) {
            item.hearts += 1;

            return item;
          } else {
            return item;
          }
        });

        setThoughts(updatedThoughts);
      });
  };

  return (
    <>
      {/* <Loading /> */}
      {loading && <Loading />}
      {/* * * * * * * * * * * * NEW THOUGHT * * * * * * * * * */}
      <Form
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        onSetThoughtChange={onSetThoughtChange}
      />
      {/* * * * * * * * * * * * CARDS * * * * * * * * * */}

      {thoughts.map(thought => {
        return (
          <ThoughtsCard
            thought={thought}
            heartCounter={heartCounter}
            moment={moment}
          />
        );
      })}
      <footer>
        <p>By Elin Elmvik Diczfalusy</p>
      </footer>
    </>
  );
}

export default App;

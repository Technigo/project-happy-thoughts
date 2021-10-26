import React, { useEffect, useState } from "react";
import moment from "moment";
import { Form } from "Form";
import { API_URL } from "./utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setThoughts(data));
  }, []);

  return (
    <section className="container">
      <Form thoughts={thoughts} setThoughts={setThoughts} />

      <div>
        {thoughts.map(thought => (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <button> &hearts; {thought.hearts}</button>
            <p className="date">
              - Created: {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

import React, { useEffect, useState } from "react";
import { HappyThought } from "./Components/HappyThought";
import { HappyForm } from "./Components/HappyForm";

const url = "https://technigo-thoughts.herokuapp.com/";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [postedMessage, setPostedMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setThoughts(json));
  }, [postedMessage]);

  const onFormSubmit = message => {
    setPostedMessage(message);
  };

  return (
    <article>
      <HappyForm onFormSubmit={onFormSubmit} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} />
      ))}
    </article>
  );
};

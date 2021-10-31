import React, { useState } from "react";
import ThoughtList from "components/ThoughtsList";
import NewThought from "components/NewThought";
import Header from "components/Header";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

  return (
    <div className="contentContainer">
      <Header />
      <NewThought newThought={newThought} setNewThought={setNewThought} />
      <ThoughtList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

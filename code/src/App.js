import React, { useState } from "react";
import ThoughtList from "components/ThoughtsList";
import NewThought from "components/NewThought";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  return (
    <div className="contentContainer">
      <NewThought
        thoughts={thoughts}
        setThoughts={setThoughts}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      <ThoughtList
        thoughts={thoughts}
        setThoughts={setThoughts}
        newThought={newThought}
        setNewThought={setNewThought}
      />
    </div>
  );
};

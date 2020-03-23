import React from "react";
import { ThoughtsList } from "./components/ThoughtsList.js";
import { ThoughtsForm } from "./components/ThoughtsForm.js";

export const App = () => {
  return (
    <div>
      <ThoughtsForm />
      <ThoughtsList />
    </div>
  );
};

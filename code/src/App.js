import React from "react";
import { ThoughtsList } from "./components/ThoughtsList";
import ThoughtsForm from "components/ThoughtsForm";
export const App = () => {
  return (
    <div>
      <ThoughtsForm />
      <ThoughtsList />
    </div>
  );
};

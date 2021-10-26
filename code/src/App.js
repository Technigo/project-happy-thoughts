import React from "react";
import { ThoughtList } from "components/ThoughtsList";
import NewThought from "components/NewThought";

export const App = () => {
  return (
    <div className="contentContainer">
      <NewThought />
      <ThoughtList />
    </div>
  );
};

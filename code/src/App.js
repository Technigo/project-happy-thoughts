import React from "react";
import { ThoughtsList } from "./components/ThoughtsList.js";
import { ThoughtsForm } from "./components/ThoughtsForm.js";
import "app.css";

export const App = () => {
  return (
    <section className="app-container">
      <ThoughtsForm />
      <ThoughtsList />
    </section>
  );
};

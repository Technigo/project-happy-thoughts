import React from "react";
import { ThoughtsList } from "./components/ThoughtsList.js";
import { ThoughtsForm } from "./components/ThoughtsForm.js";
import "app.css";
import { Header } from "./components/Header.js";

export const App = () => {
  return (
    <section className="app-container">
      <Header />
      <ThoughtsForm />
      <ThoughtsList />
    </section>
  );
};

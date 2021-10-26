import React from "react";
import Thoughts from "./components/Thoughts";
import Form from "./components/Form";

export const App = () => {
  return (
    <>
      <header>
        <h1>Happy Thoughts</h1>
      </header>
      <Form />
      <Thoughts />
    </>
  );
};

import React from "react";
import AddDataToList from "AddDataToList";
import { Helmet } from "react-helmet";

export const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Happy Thought</title>
      </Helmet>
      <div className="container">
        <AddDataToList />
      </div>
    </div>
  );
};

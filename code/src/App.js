import React from "react";

import Wrapper from "./components/Wrapper";

export const App = () => {
  return (
    <div className="content-wrapper">
      <div>
        <header>
          <h1> &hearts; Happy Thoughts &hearts;</h1>
        </header>
      </div>
      <div>
        <Wrapper />
      </div>
    </div>
  );
};

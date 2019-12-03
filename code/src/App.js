import React from "react";
import { Message } from "./Message";
import { Thoughts } from "./Thoughts";
import { Submit } from "./Submit";
import { Heart } from "./Heart";

export const App = () => {
  return (
    <div>
      <label>
        What's making you happy right know?
        <div>
          <Message />
          <Submit />
        </div>
      </label>

      <div>
        <Thoughts />
        <Heart />
      </div>
    </div>
  );
};

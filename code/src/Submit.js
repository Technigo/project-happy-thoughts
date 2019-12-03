import React from "react";
import { Summary } from "./Summary";

export const Submit = () => {
  return (
    <div>
      <button type="submit">Send happy thought</button>
      <div>
        <Summary />
      </div>
    </div>
  );
};

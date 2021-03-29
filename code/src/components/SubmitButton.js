import React from "react";

import Emoji from "../reusable/Emoji";
import "../styles/SubmitButton.css";

const SubmitButton = () => {
  return (
    <button className="submit-button" type="submit">
      <Emoji symbol="❤️" />
      Send Happy Thought!
      <Emoji symbol="❤️" />
    </button>
  );
};

export default SubmitButton;

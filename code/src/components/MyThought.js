import React from "react";

export const MyThought = ({ myThought, setMyThought }) => {
  return (
    <label>
        What is your thought?
        <input type="text"
            value = {myThought}
            onChange={e => setMyThought(e.target.value)}
            required
        />

    </label>
  );
};


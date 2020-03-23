import React from "react";

export const MyThought = ({ myThought, setMyThought }) => {
  return (
   
    
    <label className = "input">
    <p>What's making you happy right now?</p>
        <input type="text"
            value = {myThought}
            onChange={e => setMyThought(e.target.value)}
            required
        />
    </label>
   
  );
};


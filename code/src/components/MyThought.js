import React, {useState} from "react";

export const MyThought = ({ myThought, setMyThought }) => {
  const [count, setCount] = useState(0)
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


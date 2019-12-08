import React, { useState } from "react";
// import { ButtonMessage } from "ButtonMessage";

export const NewMessage = props => {
  let { newMessage, setNewMessage } = props;

  const [num, setNum] = useState(0);

  const handleChange = event => {
    setNewMessage(event.target.value);
    setNum(event.target.value.length);
  };

  return (
    <div>
      <input
        type="textarea"
        className="newMessage-input"
        minLength={5}
        maxLength={140}
        rows="3"
        value={newMessage}
        placeholder="Add New Happy Thought"
        onChange={handleChange}
      />
      <p className="charNum">{num} / 140</p>
    </div>
  );
};

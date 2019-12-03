import React, { useState } from "react";

export const Message = props => {
  const [message, setMessage] = useState("");

  return (
    <form>
      <input
        type="text"
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></input>{" "}
      <br />
    </form>
  );
};

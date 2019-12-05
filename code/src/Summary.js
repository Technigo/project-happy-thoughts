import React, { useState, useEffect } from "react";

export const Summary = props => {
  const [submitMessage, setSubmitMessage] = useState();

  useEffect(() => {
    fetch(props.url, {
      method: "POST",
      body: JSON.stringify({ message: "The sun will show again soon" })
    })
      .then(res => res.json())
      .then(newThought => {
        setSubmitMessage(previosThought => [newThought, ...previosThought]);
      });
  });

  return (
    <div>
      <p>{submitMessage}</p>
    </div>
  );
};

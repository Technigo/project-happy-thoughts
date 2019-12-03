import React, { useState, useEffect } from "react";

export const Summary = props => {
  const [submitMessage, setSubmitMessage] = useState();

  useEffect(() => {
    fetch(props.url, {
      method: "POST",
      body: JSON.stringify({ message: "The sun is out tomorrow" })
    })
      .then(res => res.json())
      .then(newThought => {
        setSubmitMessage(previosThought => [newThought, ...previosThought]);
      });
  });

  return <div>{submitMessage}</div>;
};

import React, { useState, useEffect } from "react";

export const MessageLikes = () => {
  const MESSAGE_LIKE ="https://technigo-thoughts.herokuapp.com"
  const [like, setLike] = useState("")

  const handleSubmit = event => {
    event.preventDefault();

    fetch(MESSAGES_URL,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ like: _id })
      }
    ).then(() => {
      window.location.reload();
    })

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange=""
      >
      </input>
      <input
        type="submit"
        value="Add Message">
      </input>
    </form>
  )

}


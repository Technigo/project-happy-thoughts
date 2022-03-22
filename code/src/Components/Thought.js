import React, { useState } from "react";

export const Thought = () => {

  const [message, SetMessage] = useState("")

  const SEND_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

  const options = {
    method: 'POST',
};

  fetch(SEND_URL, options)
  .then(res => res.json())
  .then(json => SetMessage)

  return (
    <form>
      <label htmlFor="thoughtInput" aria-label="thoughtInput"/>
      <input 
        type="text"
        value={message}
        />
      <button type="submit">SEND</button>
    </form>
  )
}
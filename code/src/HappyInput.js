import React, { useState } from 'react'

const HappyInput = () => {
  //Message state to save message to send to the backend:
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [message, setMessage] = useState(""); //default: empty string
  
  // A submit-function that POSTs the text-field (that handles the submission) & 
  //sends the text-field to the backend as a new message
  const handleSubmit = event => {
    event.preventDefault();
    //Send a POST request using the 'message' state
    fetch(MESSAGES_URL, 
      {
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({message: message})
      }
    ).then(() => {
      //Refresh on clicking submit-button (to get the new message to show). 
      //This will make both components re-render:
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-text"
        onChange={event => setMessage(event.target.value)}
        >
      </input>
      <input
        type="submit"
        className="input-button"
        value="Add Message">
      </input>
    </form>
  )
};
export default HappyInput;
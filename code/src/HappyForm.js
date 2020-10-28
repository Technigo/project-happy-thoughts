import React, { useState } from 'react'

import './HappyForm.css'

const HappyForm = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
  }

  //Message state to save message to send to the backend:
  // const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  // //In the lecture from previous it is another url without thoughts in the end? 
  // const [message, setMessage] = useState(""); //default: empty string
  
  // A submit-function that POSTs the text-field (that handles the submission) & 
  //sends the text-field to the backend as a new message
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   //Send a POST request using the 'message' state
  //   fetch(MESSAGES_URL, 
  //     {
  //       method: "POST",
  //       headers:{ 'Content-Type':'application/json' },
  //       body:JSON.stringify({message: message})
  //     })
  //     .then(() => {
  //     //Refresh on clicking submit-button (to get the new message to show). 
  //     //This will make both components re-render:
  //     window.location.reload(); //removed this and added from Jennies code:
  //     setMessage("") //resets the textbox to be empty after submit
  //     //props.onFormSubmit(message)
  //     })
  //     .catch(err => console.log("error", err))
  // };

  return (
    <section className="happy-form-container"> 
      <form className="happy-form"> 
        <h3 className="happy-form-heading">
          What is making you happy right now?
        </h3>
        <textarea
          tabIndex="0"
          className="happy-form-text"
          rows="3"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)} 
        >
        </textarea>
        <div className="form-footer"> 
          <button
            type="submit"
            onClick={handleSubmit} //Why not onSubmit? Difference? Change to onSubmit?
            disabled={newMessage.length < 6 || newMessage.length > 140 ? true : false} //Change to newMessage?
            className="happy-form-input-button"
            value="Add Message"
          >
          ❤️ Send Happy Thought! ❤️
          </button>
          <p>{newMessage.length} / 140</p>
        </div>
      </form>
    </section>
  )
};
export default HappyForm;
import React, { useState } from 'react';
import "./happyForm.css";

const url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"

export const HappyForm = props => {
  const [message, setMessage] = useState("");
  const handleSubmit = event => {
//prevent default page refresh
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
                "Content-type" : "application/json"
                },
      body: JSON.stringify({message})
      })
      .then(()=>{
      //refresh the page when a new message is added
//    window.location.reload(); //what is the difference?
      //set the input box to empty
      setMessage("");
      //what does this do??
      props.onFormSubmit(message)
      })
      .catch(err => console.log("error:",err))
  };
      
return (
<form className="happy-form">
    <h3>Post a happy thought here!</h3>
        <textarea
          // this create space for typing
            rows="3"
            value={message}
            onChange={event => setMessage(event.target.value)}
        ></textarea>
          {/* input submit button */}
          <div className="form-footer">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={message.length < 6 || message.length > 140 ? true : false}
            >Send a happy thought</button>
            <p>{message.length} / 140</p>
          </div>
    </form>
  )
}



      
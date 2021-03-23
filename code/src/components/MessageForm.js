import React, { useState } from 'react';

import { API_URL } from '../reusable/urls'



const MessageForm =() => {
   const [newMessage, setNewMessage] = useState('')

  const newMessageChange = (event) =>{
    setNewMessage(event.target.value);
  }

  const options = {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: newMessage})
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted', newMessage)

    fetch(API_URL, options)
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <section className="form-container">
      <form onSubmit={ onFormSubmit} className="form-box">
        <label htmlFor="newMessage">What are you happy about today?</label>
        <textarea rows="4" cols="50" placeholder="Enter thought here.."
        id="newMessage"
        type="text"
        value={newMessage}
        onChange={newMessageChange}
        />
        <button className="button" type="submit">Send happy thought!</button>
      </form>
    </section>

  )
}

export default MessageForm;
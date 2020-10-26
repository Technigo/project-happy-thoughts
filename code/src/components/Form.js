import React, { useState } from 'react';

export const Form = () => {
  const [newThought, setNewThought] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    //Creates a POST request to add new Thought to the API
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts',
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        //Adds new thought to the API's body in json format
        //newThought is the value we got from the input field
        body:JSON.stringify({message: newThought})
      }
    ).then(() => {
      //Asks page to reload after the new thought has been POSTed
      //So the click should POST the thought to the API then refresh
      //the page and the new page should now also show the thought we
      //just added
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="thoughts-form">
      <p className="form-title">What's making you happy right now?</p>
      <textarea type="text" maxlength='140' onChange={event => setNewThought(event.target.value)}></textarea>
      <p className="text-counter">{140 - newThought.length} characters left</p>
      <button 
        className="form-button" 
        type="submit" 
        disabled={newThought.length < 6 || newThought.length > 140 ? true : false}>
          &#128151; Send Happy Thought &#128151;
      </button>
    </form>
  );
};
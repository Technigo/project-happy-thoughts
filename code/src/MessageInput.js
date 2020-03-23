import React, {useState} from 'react'


export const MessageInput = () => {
  const MESSAGE_URL = "https://technigo-thoughts.herokuapp.com/"
  const [message, setMessage] = useState('');

  
 

  const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGE_URL, 
      {
        
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ message: message })
    }
  ).then(() => {
      window.location.reload();
    });
  }
    

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="new-thought"> */}
        {/* <label>
          <p>What's making you happy right now?</p> */}
          <input 
            className="inputField" 
            type="text" 
            id="myThought"
            onChange={event => setMessage(event.target.value)}>
            </input>
            <input
            type="submit"
            value= "Add Message"
            className="form-button"
            >
            </input>
          
        {/* </label> */}

     
    </form>
  )}
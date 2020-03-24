import React, {useState} from 'react'
// import  heart from './heart.png'

export const MessageInput = (props) => {
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
        {/* <label>*/}
        <label className="text-area">
          <p className="label-input">What's making you happy right now?</p> 
          <textarea 
            type="text"
            minLength="1"
            maxLength="120"
            className="input-field" 
            type="text" 
            id="myThought"
            required
            onChange={event => setMessage(event.target.value)}> 
            </textarea>
            </label>
            <input
            type="submit"
            value= '❤️    add message    ❤️'
            className="form-button"
            >
            </input>
          
        {/* </label> */}

     
    </form>
  )}
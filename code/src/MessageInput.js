import React, {useState} from 'react'
// import  heart from './heart.png'

export const MessageInput = (props) => {
  const MESSAGE_URL = "https://technigo-thoughts.herokuapp.com/"
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  

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
      
        <label className="text-area">
          <p className="label-input">What's making you happy right now?</p> 
          <textarea 
            type="text"
            minLength="1"
            maxLength="140"
            className="input-field" 
            id="myThought"
            required
            onChange={event => setMessage(event.target.value)}
            onChange={event => setCount(event.target.value.length)}> 
            </textarea>
            <p className="char-count">{count}/140</p>
            </label>
            <input
            type="submit"
            value= '❤️    add message    ❤️'
            className="form-button"
            >
            </input>
          
        

     
    </form>
  )}
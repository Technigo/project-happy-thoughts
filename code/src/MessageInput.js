import React, {useState} from 'react'

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

  const handleChange = (e) => {
    setMessage(e.target.value)
    setCount(e.target.value.length)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-area">
        <p className="label-input">What's making you happy right now?</p> 
        <textarea 
          type="text"
          minLength="6"
          maxLength="140"
          className="input-field" 
          type="text"
          id="myThought"
          required
          onChange={handleChange}
          tabIndex='0'> 
        </textarea>
        <p className="char-count">{count}/140</p>
      </label>
      <input
        type="submit"
        value= '❤️    Add message    ❤️'
        className="form-button"
        tabIndex='0'
        disabled={message.length < 6 || message.length > 140 ? true : false}>
      </input>
    </form>
  )}
import React, { useState } from 'react'

const Form = ({ getApiData }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: userInput
      })
    }
    
    await fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    getApiData();
  }

  const updateUserInput = (e) => {
    setUserInput(e.target.value);
  }

  console.log(userInput)
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label htmlFor="form">
          <h1 style={{color: 'pink'}}>What&apos;s making you happy right now?</h1>
          <input
            id="form"
            type="text"
            name="message"
            value={userInput}
            onChange={updateUserInput} />
        </label>
        <button
          type="submit"
          className="form-button">
          <span role="img" aria-label="Red Heart">❤️</span>
            Send happy thought
          <span role="img" aria-label="Red Heart">❤️</span>
        </button>
      </form>
    </div>
  )
}

export default Form
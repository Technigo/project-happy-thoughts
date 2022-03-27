import React, { useState } from 'react'

const Form = ({ getApiData }) => {
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const postMessage = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: userInput
      })
    }

    try {
    const response = await fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options);
    const json = await response.json();
    setErrorMessage('');
      if (!response.ok) {
        throw new Error(JSON.stringify(json.errors.message.message));
      }
      return json;
    } catch(err) {
      let error = err.toString();
      setErrorMessage(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postMessage();
    setUserInput('');
    getApiData();
  }

  const updateUserInput = (e) => {
    setUserInput(e.target.value);
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label htmlFor="form">
          <h1 style={{ color: 'pink' }}>What&apos;s making you happy right now?</h1>
          <p style={{fontSize: '12px', wordWrap: 'break-word'}}>{errorMessage}</p>
          <input
            id="form"
            type="text"
            name="message"
            value={userInput}
            onChange={updateUserInput} />
            <p>
              <span style={{color: userInput.length >= 140 ? 'red' : 'green' }}>
                {userInput.length}
              </span>
                / 140 characters
            </p>
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
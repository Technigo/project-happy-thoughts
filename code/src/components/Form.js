import React, {useState} from 'react'

const Form = ({apiData}) => {
  const [userInput, setUserInput] = useState('');
  const [updatedData, setUpdatedData] = useState([]);

  const handleSubmit = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userInput
      })
    }

    console.log(updatedData)

    const fetchedRes = await fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts`, options)
    let postedData = await fetchedRes.json();
    setUpdatedData(apiData => [...apiData, postedData])
  }

  const updateUserInput = (e) => {
    setUserInput(e.target.value);
  }

console.log(userInput)
  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label>
        <h1>What's making you happy right now?</h1>
          <input 
            type="text"
            name="message"
            value={userInput}
            onChange={updateUserInput}
          />
        </label>
      </form>
      <button 
        type="submit" 
        className="form-button">
        <span role="img" aria-label="Red Heart">❤️</span> 
          Send happy thought
        <span role="img" aria-label="Red Heart">❤️</span> 
      </button>
    </div>
  )
}

export default Form
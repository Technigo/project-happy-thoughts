import React, {useState} from 'react'
// import {Thoughts} from '/Thoughts'

export const AddThoughts = () => {
  
  const [addThoughts, setAddThoughts] = useState('')

  // const [thought, setThoughts] = useState([])
 

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({message: { addThoughts } })
    })
    .then((res) => res.json())
    .then((addThoughts) => {
      setAddThoughts((thoughts) => [addThoughts, ...thoughts])
    }) }
    

  return (
    <form>
      <div className="new-thought">
        <label>
          <p>What's making you happy right now?</p>
          <input className="inputField" type="text" id="myThought"
          onChange={(event) => setAddThoughts(event.target.value)}
          value={addThoughts}/>
          <button type="submit" onClick={handleFormSubmit}>Send</button>
        </label>

      </div>
    </form>
  )
}
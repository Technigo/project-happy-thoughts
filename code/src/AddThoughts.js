import React, {useState} from 'react'
// import {Thoughts} from '/Thoughts'

export const AddThoughts = (props) => {
  const [addThoughts, setAddThoughts] = useState('')
  // const [thought, setThoughts] = useState([])
 

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({message: { addThoughts } })
    })
    .then((res) => res.json())
    .then(data => AddThoughts({postId: data._id}))  
     
   
  }

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
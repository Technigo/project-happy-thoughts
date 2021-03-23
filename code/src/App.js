import React, {useState, useEffect} from 'react'
import moment from 'moment'

import { Fetch_API } from './reusable/urls'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [thoughtsNew, setThoughtsNew] = useState('')
  
  useEffect(() => {
    fetchThoughtsList()
  }, [])

  const fetchThoughtsList = () => {
    fetch(Fetch_API)
      .then(res => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .catch(err => console.error(err))          
  }

  const onThoughtsNew = (event) =>  {
    setThoughtsNew(event.target.value)
    }

  const onSubmitForm = (event) => {
    event.preventDefault() 

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: thoughtsNew }) 
    }

    fetch(Fetch_API, options)
    .then(res => res.json())
    .then(recivedThought => setThoughtsList([...thoughtsList, recivedThought]))
    .catch(err => console.error(err))
  }  

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="newThougt">Write a thought</label>
        <input 
          id="newThougt"
          type="text"
          value={thoughtsNew}
          onChange={onThoughtsNew}
          />
          <button type="submit">Submit</button>
      </form>
      {thoughtsList.map(thoughts => (
        <div key={thoughts._id}>
          <h4>{thoughts.message}</h4>
          <p>{moment(thoughts.created).fromNow()}</p>
        </div>
      ))}
    </div>
  )
}

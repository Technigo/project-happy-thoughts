import React, {useState, useEffect} from 'react'
import moment from 'moment'

import { Fetch_API, like_url } from './reusable/urls'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [thoughtsNew, setThoughtsNew] = useState('')
  const [loader, setLoader] = useState (true)
  

  useEffect(() => {
    fetchThoughtsList()
  }, [])

  const fetchThoughtsList = () => {
    fetch(Fetch_API)
    .then(res => res.json())
    .then(thoughts => setThoughtsList(thoughts))
    .then(setLoader(false))
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

  const onLikesIncrease = (id) => { 
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }       
    }    
      fetch(like_url(id),option)
      .then(res => res.json())
      .then(recivedLike => {      
        
    const updatedThoughtsList = thoughtsList.map(thoughts => { 
      if (thoughts._id === recivedLike._id) {
        thoughts.hearts += 1 
      } 
      return thoughts
    }) 
    setThoughtsList(updatedThoughtsList)
  })
  .catch(err => console.error(err))
}

  console.log(thoughtsList)

  return (
    <div className="main">
      {loader === true && <div className="lds-heart"><div></div></div>}   
      
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
          <div className="card-container" key={thoughts._id}>
            <h4>{thoughts.message}</h4>
            <p>{moment(thoughts.created).fromNow()}</p>

            <button onClick= {() => onLikesIncrease(thoughts._id)}>{thoughts.hearts}</button>
            
          </div>
        ))}      
    </div>
  )
}

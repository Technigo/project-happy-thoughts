import React, {useState, useEffect} from 'react'

import { Fetch_API, like_url } from './reusable/urls'

import { CardContainer } from './components/CardContainer'
import { Form } from './components/Form'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [thoughtsNew, setThoughtsNew] = useState('')
  const [loader, setLoader] = useState (true)  

  useEffect(() => {
    fetchThoughtsList()
  }, [thoughtsList])

  const fetchThoughtsList = () => {
    fetch(Fetch_API)
    .then(res => res.json())
    .then(thoughts => setThoughtsList(thoughts))
    .then(setLoader(false))
    .catch(err => console.error(err))          
  }

  const HandleThoughtsNew = (event) =>  {
    setThoughtsNew(event.target.value)
    }

  const HandleSubmitForm = (event) => {
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
    
    setThoughtsNew('')    
  }  

  const HandleLikesIncrease = (id) => {     
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

  return (
    <div className="main">
        {loader === true && <div className="lds-heart"><div></div></div>}
        <Form 
          thoughtsNew={thoughtsNew}
          OnThoughtsNew={HandleThoughtsNew}
          OnSubmitForm={HandleSubmitForm}
        />
        <CardContainer 
          thoughtsList={thoughtsList}
          HandleLikesIncrease={HandleLikesIncrease}
        />
    </div>
  )
}

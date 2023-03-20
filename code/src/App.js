import React, { useState, useEffect } from 'react'
import { baseURL } from './urls/urls'

import { Form } from './components/Form'
import { CardContainer } from './components/CardContainer'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [thoughtsNew, setThoughtsNew] = useState('')
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    fetchThoughtsList()
  }, [thoughtsList])

/*Get the URL for thoughts from user*/
  const fetchThoughtsList = () => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((thoughts) => setThoughtsList(thoughts))
      .then(setLoader(false))
  }

  const HandleThoughtsNew = (event) => {
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

    fetch(baseURL, options)
      .then((res) => res.json())
      .then((recivedThought) => setThoughtsList([...thoughtsList, recivedThought]))
    setThoughtsNew('')
  }
    })

    return (
    <div className="main">
      {/* {loader === true && <div className="lds-heart"><div /></div>} */}
      <Form />
        {/* // thoughtsNew={thoughtsNew}
        // OnThoughtsNew={HandleThoughtsNew}
        // OnSubmitForm={HandleSubmitForm} /> */}
      <CardContainer />
    
    </div>
  )
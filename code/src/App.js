import React, { useState, useEffect } from 'react'
import { CardContainer } from './components/Card'

import { Fetch_API } from './urls/urls'

import { Form } from './components/Form'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  // const [thoughtsNew, setThoughtNew] = useState('')
  // const [loader, setLoader] = useState (true)

  useEffect(() => {
    fetchThoughtsList()
  }, [thoughtsList])

  const fetchThoughtsList = () => {
    fetch(Fetch_API)
      .then((res) => res.json())
      .then(thoughts => setThoughtsList(thoughts))
      .then(setLoader(false))
  }

  return (
    <div className="main">
      <Form />
      <CardContainer />
    </div>
  )
}
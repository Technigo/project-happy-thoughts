import React, { useState, useEffect } from 'react'

import { ThoughtsContainer } from 'components/ThoughtsContainer'
import { PostThought } from 'components/PostThought'

import 'app.scss'


export const App = () => {

  const apiUrl = 'https://technigo-thoughts.herokuapp.com/'
  const [thoughts, setThoughts] = useState([])


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setThoughts(data))
  }, [])

  return (
    <div className="wrapper">

      <PostThought
        setThoughts={setThoughts}
        apiUrl={apiUrl}
      />

      <ThoughtsContainer
        thoughts={thoughts}
        apiUrl={apiUrl}
      />

    </div>
  )
}

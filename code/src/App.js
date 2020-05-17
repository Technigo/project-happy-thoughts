import React, { useState, useEffect } from 'react'

import { PostThought } from 'components/PostThought'
import { Sorting } from 'components/Sorting'
import { ThoughtsContainer } from 'components/ThoughtsContainer'

import 'app.scss'


export const App = () => {

  const apiUrl = 'https://api-happy-thoughts.herokuapp.com'
  const [thoughts, setThoughts] = useState([])
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    fetch(`${apiUrl}/thoughts?sort=${sort}`)
      .then(res => res.json())
      .then(data => setThoughts(data))
  }, [sort])

  return (
    <div className="wrapper">

      <PostThought
        setThoughts={setThoughts}
        apiUrl={apiUrl} />

      <Sorting
        state={sort}
        setState={setSort} />

      <ThoughtsContainer
        thoughts={thoughts}
        apiUrl={apiUrl} />

    </div>
  )
}

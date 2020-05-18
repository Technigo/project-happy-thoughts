import React, { useState, useEffect } from 'react'

import { PostThought } from 'components/PostThought'
import { Loading } from 'components/Loading'
import { Sorting } from 'components/Sorting'
import { ThoughtsContainer } from 'components/ThoughtsContainer'

import 'app.scss'


export const App = () => {

  const apiUrl = 'https://api-happy-thoughts.herokuapp.com'
  const [loading, setLoading] = useState(true)
  const [thoughts, setThoughts] = useState([])
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    setLoading(true);

    fetch(`${apiUrl}/thoughts?sort=${sort}`)
      .then(res => res.json())
      // .then(data => setThoughts(data))
      .then(data => {
        setTimeout(() => { // timeout to always show loader
          setThoughts(data);
          setLoading(false)
        }, 1500)
      });
  }, [sort])

  return (
    <div className="wrapper">

      <PostThought
        setThoughts={setThoughts}
        apiUrl={apiUrl} />

      <Sorting
        state={sort}
        setState={setSort} />

      <Loading loading={loading} />

      <ThoughtsContainer
        thoughts={thoughts}
        apiUrl={apiUrl} />

    </div>
  )
}

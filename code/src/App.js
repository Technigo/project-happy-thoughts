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
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    setLoading(true)

    fetch(`${apiUrl}/thoughts?page=${page}&sort=${sort}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => { // Show loader for a longer time
          setTotalPages(data.pages)
          setThoughts(data.thoughts)
          setLoading(false)
        }, 1500)
      })
  }, [page, sort])


  return (
    <div className="wrapper">

      <PostThought
        setThoughts={setThoughts}
        setPage={setPage}
        apiUrl={apiUrl} />

      <Sorting
        state={sort}
        setState={setSort} />

      {loading ? // Show loader if loading is true, else display thoughts
        <Loading loading={loading} />
        :
        <ThoughtsContainer
          thoughts={thoughts}
          apiUrl={apiUrl}
          page={page}
          setPage={setPage}
          totalPages={totalPages} />
      }

    </div>
  )
}

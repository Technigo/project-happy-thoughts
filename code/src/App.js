import React, { useEffect, useState, useCallback } from 'react'

import { API_URL } from './utils/commons'

import ThoughtForm from './components/ThoughtForm'
import ThoughtsList from './components/ThoughtsList'
import ThoughtsListNavigation from './components/ThoughtsListNavigation'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [displayedThoughts, setDisplayedThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState(-1) // desc sorting by default

  const perPage = 4

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data.response))
  }

  const fetchDisplayedThoughts = useCallback(() => {
    fetch(`${API_URL}?sort=${sort}&page=${page}&perPage=${perPage}`)
      .then((res) => res.json())
      .then((data) => setDisplayedThoughts(data.response))
  }, [page, sort])

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  const handleSetSort = (event) => setSort(event.target.value)

  useEffect(() => {
    fetchDisplayedThoughts()
  }, [fetchDisplayedThoughts])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options).then((res) =>
      res.json().then(() => {
        fetchThoughts()
        fetchDisplayedThoughts()
        setNewThought('')
      }),
    )
  }

  return (
    <div>
      <div className="header">
        <h2>Happy Thoughts</h2>
      </div>
      <ThoughtForm
        onFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />
      <ThoughtsListNavigation
        thoughts={thoughts}
        handleSetSort={handleSetSort}
        perPage={perPage}
        previousPage={previousPage}
        nextPage={nextPage}
        sort={sort}
        page={page}
      />
      <ThoughtsList
        fetchThoughts={fetchThoughts}
        fetchDisplayedThoughts={fetchDisplayedThoughts}
        displayedThoughts={displayedThoughts}
      />
    </div>
  )
}

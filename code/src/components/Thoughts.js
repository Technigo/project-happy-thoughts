import React, { useState, useEffect } from 'react'
import { ThoughtsList } from './ThoughtsList'
import { NewThoughtForm } from './NewThoughtForm'
import './thoughts.css'
import { Pagination } from './Pagination'

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Fetch happy thoughts from API using GET
  useEffect(() => {
    fetch(`https://fridamaria-happy-api.herokuapp.com/thoughts?page=${page}`)
      .then(res => res.json())
      .then(json => {
        setThoughts(json.thoughts)
        setLoading(false)
        setPage(json.page)
        setTotalPages(json.total_pages)
      })
  }, [page])

  // Mapping through the array of thoughts
  // Adding one heart if the id is the same as the id for the heart clicked 
  const onHeartClicked = (thoughtId) => {
    const heartClicked = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(heartClicked)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  return (
    <div className="thoughts-wrapper">
      <section className="thoughts-container">
        <NewThoughtForm
          setThoughts={setThoughts} />

        {loading && <p className="loading-thoughts">Loading happy thoughts...</p>}

        <ThoughtsList
          thoughts={thoughts}
          onHeartClicked={onHeartClicked} />

        <Pagination
          page={page}
          totalPages={totalPages}
          back={previousPage}
          next={nextPage} />
      </section>
    </div>
  )
}
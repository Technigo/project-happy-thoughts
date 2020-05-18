import React from 'react'
import { Thought } from './Thought'
import { Pagination } from 'components/Pagination'


export const ThoughtsContainer = ({ thoughts, apiUrl, page, setPage, totalPages }) => {
  return (
    <>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages} />

      <section className="thoughts-container">

        {thoughts.thoughts.map(thought => ( // Maps through thoughts
          <Thought
            key={thought._id}
            thought={thought}
            apiUrl={apiUrl}
          />
        ))}

      </section>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages} />
    </>
  )
}
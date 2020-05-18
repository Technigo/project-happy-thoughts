import React from 'react'
import { Thought } from './Thought'
import { Pagination } from 'components/Pagination'


export const ThoughtsContainer = ({ thoughts, apiUrl, page, setPage, totalPages }) => {
  return (
    <section className="thoughts-container">

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages} />

      {thoughts.thoughts.map(thought => ( // Maps through thoughts

        <Thought
          key={thought._id}
          thought={thought}
          apiUrl={apiUrl}
        />

      ))}

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages} />

    </section>
  )
}
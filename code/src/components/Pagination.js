import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <section className="pagination-container">

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1 ? true : false}
        value="Previous page">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <span>{`${page}/${totalPages}`}</span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages ? true : false}
        value="Next page">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

    </section>
  )

}
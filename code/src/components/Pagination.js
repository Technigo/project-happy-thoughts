import React from 'react'
import './pagination.css'

export const Pagination = ({ page, totalPages, back, next }) => {
  return (
    <p className='pagination'>
      <button
        className='arrow'
        disabled={page === 1 ? true : false}
        onClick={back}>
        &lt;
      </button>
      {page} / {totalPages}
      <button
        className='arrow'
        disabled={page === totalPages ? true : false}
        onClick={next}>
        &gt;
      </button>
    </p>
  )
}
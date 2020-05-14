import React from 'react'
import './pagination.css'

export const Pagination = ({ page, totalPages, back, next }) => {
  return (
    <p className='pagination'>
      <span
        className='arrow'
        onClick={back}>
        &lt;
      </span>
      {page} / {totalPages}
      <span
        className='arrow'
        onClick={next}>
        &gt;
      </span>
    </p>
  )
}
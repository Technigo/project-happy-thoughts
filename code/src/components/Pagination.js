import React from 'react'
import './pagination.css'

export const Pagination = ({ page, totalPages }) => {
  return (
    <p className='pagination'>{page} / {totalPages}</p>
  )
}
import React from 'react'
import { Newest } from 'Newest'
import { Oldest } from 'Oldest'

export const Messages = ({
  thoughts,
  onLikeClick,
  filter,
  handleFilterChange,
}) => {
  const onSortSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className='filter-container'>
        <select
          value={filter}
          onChange={handleFilterChange}
          onSubmit={onSortSubmit}
        >
          <option value=''>Sort thoughts</option>
          <option value='Newest'>Newest</option>
          <option value='Oldest'>Oldest</option>
        </select>
      </div>

      {filter === 'Newest' && (
        <Newest thoughts={thoughts} onLikeClick={onLikeClick} />
      )}
      {filter === 'Oldest' && (
        <Oldest thoughts={thoughts} onLikeClick={onLikeClick} />
      )}
    </>
  )
}

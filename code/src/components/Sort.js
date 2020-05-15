import React from 'react'
import './sort.css'

export const Sort = ({ onChange }) => {
  return (
    <div className="sort-container">
      <h2 className="sort">Sort by</h2>
      <select className="sort-select" onChange={onChange}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="loved">Loved</option>
      </select>
    </div>
  )
}
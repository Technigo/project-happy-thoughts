import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const PageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    PageNumbers.push(i)
  }
  return (
    <ul>
      {PageNumbers.map((number) => <li key={number}><a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a> </li>)}
    </ul>
  )
}

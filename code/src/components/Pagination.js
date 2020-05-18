import React from 'react';

export const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <section className="pagination-container">
      <button onClick={() => setPage(page - 1)} disabled={page === 1 ? true : false}>←</button>
      <span>{`${page}/${totalPages}`}</span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages ? true : false}>→</button>
    </section>
  )

}
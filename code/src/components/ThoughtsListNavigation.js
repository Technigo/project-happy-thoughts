import React from 'react'

const ThoughtsListNavigation = ({
  thoughts,
  handleSetSort,
  perPage,
  previousPage,
  nextPage,
  sort,
  page,
}) => {
  return (
    <div className="navigation">
      <div>
        <label htmlFor="sort">Sort by </label>
        <select id="sort" value={sort} onChange={handleSetSort}>
          <option value={-1}>Newest</option>
          <option value={1}>Oldest</option>
        </select>
      </div>
      <div className="page-navigation">
        <div>
          <button
            className="page-button"
            onClick={() => previousPage()}
            disabled={page === 1}>
            ←
          </button>
        </div>
        <p>
          Page {page} / {Math.ceil(thoughts.length / perPage)}
        </p>
        <div>
          <button
            className="page-button"
            onClick={() => nextPage()}
            disabled={page === Math.ceil(thoughts.length / perPage)}>
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThoughtsListNavigation

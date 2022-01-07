import React from "react";

const Pagination = ({ perPage, setPerPage, nextPage, page, previousPage }) => {
  return (
    <div className="pagination">
      <div>
        <label htmlFor="pagination">Results per page</label>
        <select id="pagination" value={perPage} onChange={setPerPage}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div>
        {page !== 1 && (
          <button onClick={previousPage} className="button">
            Previous page
          </button>
        )}
        <button onClick={nextPage} className="button">
          Next page
        </button>
      </div>
    </div>
  );
};

export default Pagination;

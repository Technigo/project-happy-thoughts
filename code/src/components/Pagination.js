import React from "react";

const Pagination = ({ page, amount, setPage, setAmount, thoughts }) => {

    return (
        <div classname="pagination-container">
            <div className="pagination-select">
                <label htmlFor="pagination" className="label-pagination">Thoughts per page</label>
                <select id="pagination" className='pagination-dropdown' value={amount} onChange={(event) => setAmount(Number(event.target.value))}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>

            <div className='buttons-container'>
                {page !== 1 && (
                    <button onClick={() => setPage(page - 1)} className='pagination-one-button'>
                        Previous page
                    </button>
                )}
                <button disabled={thoughts.length === 0} onClick={() => setPage(page + 1)} className='pagination-one-button'>
                    Next page
                </button>
            </div>
        </div>
    )
}

export default Pagination
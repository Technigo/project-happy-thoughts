import React from 'react'

const Pagination = ({ page, setPage, messageList }) => {
  /* const test = []

   const filterMustLikes = () => {
    messageList.map(item => {
      if (Math.max(item.hearts))
        test.push(item)
    })
      console.log(test)
  }  */

  return (
    <div className="pagination-btn-container"> 
      <button className="pagination-btn" onClick={() => setPage(page - 1)} disabled={page === 1}>Older</button>
      <button className="pagination-btn" onClick={() => setPage(page + 1)} disabled={messageList.length < 5}>More</button>
{/*       <button className="pagination-btn" onClick={filterMustLikes}>Most Liked</button>
 */}    </div>
  )
}

export default Pagination 
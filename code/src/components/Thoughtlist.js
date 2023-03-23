/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react'
import { formatDistance } from 'date-fns';

const Thoughtlist = ({ loading, thoughtList, onLikesIncrease }) => {
  // if (!Array.isArray(thoughtList)) {
  //   return null
  // }

  if (loading) {
    return <div className="Loading">Loading...<span /></div>
  }

  return (
    <section>
      {thoughtList.map((list) => (
        <div className="thought-list-box" key={list._id}>
          <p className="thought-message">{list.message}</p>
          <div className="likes">
            <button className={(list.hearts === 0 ? 'like-btn' : 'no-like-btn')} onClick={() => onLikesIncrease(list._id)}>
              <span>❤️️</span>
            </button>
            <p className="like-counter"> x {list.hearts}</p>
            <p className="date"> {formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
export default Thoughtlist
/* eslint-disable no-underscore-dangle */
import React from 'react'
import { formatDistance } from 'date-fns';

const Thoughtlist = ({ thoughts, onLikesIncrease }) => {
  return (
    <div className="thought-list">
      <p className="thought-message">{thoughts.message}</p>
      <div className="likes">
        <button type="button" className="like-btn" onClick={() => onLikesIncrease(thoughts._id)} style={{ background: thoughts.hearts >= 1 ? '#f65a94' : '#eaeaea' }}>
          <span>🤍</span>
        </button>
        <p className="like-counter"> x {thoughts.hearts}</p>
        <p className="date"> {formatDistance(new Date(thoughts.createdAt), Date.now(), { addSuffix: true })}</p>
      </div>
    </div>
  )
}
export default Thoughtlist;
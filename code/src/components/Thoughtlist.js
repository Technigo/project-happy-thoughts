/* eslint-disable no-underscore-dangle */
import React from 'react'
import moment from 'moment'

const Thoughtlist = ({ thoughts, onLikesIncrease }) => {
  return (
    <section className="thought-list">
      <div className="thought-list-box" key={thoughts._id}>
        <p className="thought-message">{thoughts.message}</p>
        <div className="likes-date-wrapper">
          <div className="likes-wrapper">
            <button type="button" className="like-btn" onClick={() => onLikesIncrease(thoughts._id)} style={{ background: thoughts.hearts >= 1 ? '#f65a94' : '#eaeaea' }}>
              <span>❤️️</span>
            </button>
            <p className="like-counter"> x {thoughts.hearts}</p>
          </div>
          <p className="date">Posted: {moment(thoughts.createdAt).fromNow()}</p>
        </div>
      </div>
    </section>
  )
}
export default Thoughtlist
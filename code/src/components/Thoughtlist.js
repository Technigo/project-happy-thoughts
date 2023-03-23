/* eslint-disable no-underscore-dangle */
import React from 'react'
import moment from 'moment'

const Thoughtlist = ({ thoughts, onLikesIncrease }) => {
  return (
    <section className="thought-list">
      {thoughts.map((thoughtMessage) => {
        return (
          <div className="thought-list-box" key={thoughtMessage._id}>
            <p className="thought-message">{thoughtMessage.message}</p>
            <div className="likes-date-wrapper">
              <div className="likes-wrapper">
                <button type="button" className="like-btn" onClick={() => onLikesIncrease(thoughtMessage._id)} style={{ background: thoughtMessage.hearts >= 1 ? '#f65a94' : '#eaeaea' }}>
                  <span>❤️️</span>
                </button>
                <p className="like-counter"> x {thoughtMessage.hearts}</p>
              </div>
              <p className="date">Posted: {moment(thoughtMessage.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default Thoughtlist
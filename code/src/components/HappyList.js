/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import moment from 'moment'

export const HappyList = ({ loading, happyThoughts, handleLikeChange }) => {
  if (loading) {
    return <h2 className="loading-time">Loading happy times...</h2>
  }

  return (
    <section className="thought-list">
      {happyThoughts.map((happy) => (
        <div className="all-thought-boxes">
          <p key={happy._id}>{happy.message} </p>
          <div className="likes-section">
            <button
              className={happy.hearts === 0 ? 'heart-passive' : 'heart-active'}
              type="submit"
              onClick={() => handleLikeChange(happy._id)}>❤️
            </button>
            <p className="number-likes">x{happy.hearts}</p>
          </div>
          <div className="minutes">
            <p> {moment(happy.createdAt).fromNow()} </p>
          </div>
        </div>
      ))}
    </section>
  )
}
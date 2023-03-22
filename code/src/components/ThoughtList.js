/* eslint-disable no-underscore-dangle */
import React from 'react'
import moment from 'moment';

export const ThoughtList = ({ loading, thoughtList, handleLikeChange }) => {
  if (loading) {
    return <h1> Loading in progress...</h1>
  }
  //  const onThoughtLikeChange = (thought) => {
  //  setThoughtList((thoughtLists) => thoughtLists.map((singleThought) => {
  //    }
  //   return singleThought;
  //  }
  return (
    <section className="thought-list">
      {thoughtList.map((thought) => {
        return (
          <div className="single-thought">
            <p key={thought._id}>{thought.message} </p>
            <div className="thought-specs">
              <div className="likes-section">
                <button className="heart-container" type="submit" onClick={() => handleLikeChange(thought._id)}>🖤</button>
                <p>x{thought.hearts}</p>
              </div>
              <p>{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
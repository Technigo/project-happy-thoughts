import React from 'react'
import moment from 'moment';

export const ThoughtList = ({ loading, thoughtList }) => {
  if (loading) {
    return <h1> Loading in progress...</h1>
  }
  //  const onThoughtLikeChange = (thought) => {
  //  setThoughtList((thoughtLists) => thoughtLists.map((singleThought) => {
  //    }
  //   return singleThought;
  //  }
  return (
    <section>
      {thoughtList.map((thought) => (
        <div key={thought.id}>
          <h4>{thought.message}</h4>
          <p>{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </section>
  )
}
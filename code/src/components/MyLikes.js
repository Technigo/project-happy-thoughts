import React from 'react'

const MyLikes = ({numberOfMyLikes, fetchThoughts, API_URL}) => {
  
  return (
    <section className="mylikes-container">
    <div className="mylikes-wrapper">
      <p className="mylikes">My {'\u2665'} posts x {numberOfMyLikes}</p>
      <button className="update-button" onClick={() => fetchThoughts(API_URL)} >Update board</button>
    </div>
  </section>
  )
}

export default MyLikes
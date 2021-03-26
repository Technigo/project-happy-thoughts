import React from 'react'

const MyLikes = ({numberOfMyLikes}) => {
  
  return (
    <section className="mylikes-container">
    <div className="mylikes-wrapper">
      <p className="mylikes">My {'\u2665'} posts x {numberOfMyLikes}</p>
    </div>
  </section>
  )
}

export default MyLikes
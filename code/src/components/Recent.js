import React from 'react'

const Recent = ({ loading, thoughts, onLikePost }) => {

  if (loading) {
      return <h1>Loading in progress..</h1>
  }

  return (
      <section className='thoughts-box'>
          {thoughts.map(item => (
              <div key={item.id} className="single-thoughts"> 
              <h2>{item.message}</h2>
              <button 
              onClick={event =>onLikePost(event)} 
              className="heart">
                <span role="img" aria-label="heart emoji">&#10084;&#65039;</span>
              </button>
              <p>{item.createdAt}</p>
              </div>
          ))}
          </section>
  )
}

export default Recent
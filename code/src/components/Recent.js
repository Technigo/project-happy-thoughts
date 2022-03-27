import React from 'react'
import { formatDistance } from 'date-fns'

const Recent = ({ loading, thoughts, onLikeIncrease }) => {

  if (loading) {
    return <h1>HAPPY THOUGHTS COMING UP</h1>
  }

  return (
    <section className='thoughts-box'>
      {thoughts.map(thought => (
        <div key={thought._id} className="single-thoughts"> 
         <h2>{thought.message}</h2>
         <div className='thoughts-details'>
            <div className='thoughts-likes'>
              <button 
                onClick={() => onLikeIncrease(thought._id)} 
                className={thought.hearts > 0 ? 'heart liked' : 'heart'}>
                <span role="img" aria-label="heart emoji">&#10084;&#65039;</span>
              </button>
              <p className="number-likes"> x{thought.hearts} </p>
            </div>
            <p>{formatDistance(new Date(thought.createdAt), Date.now(), {addSuffix: true,})}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Recent
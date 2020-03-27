import React from 'react'
import moment from 'moment'

export const ThoughtsList = (props) => {

  return (
    <div>
      {
        props.list.map(thought => (
          <section
            className='thought'
            key={thought._id}
          >
            <p>
              {thought.message}
            </p>
            <div className="heart-wrapper">
              <div className="heart-section">
                <button
                  onClick={() => props.onLike(thought._id)}
                  className={
                    thought.hearts > 5 ? 'super-liked' : thought.hearts > 0 ? 'liked' : 'not-liked'
                  }
                >
                  <span
                    className='hearts'
                    role='img'
                    aria-label='Heart'>
                    ❤️
                  </span>
                </button>
                <p className="likes">
                  x {thought.hearts}
                </p>
              </div>
              <p>
                <span className='thought-time'>
                  {moment(thought.createdAt).fromNow()}
                </span>
              </p>
            </div>
          </section>
        ))
      }
    </div>
  )
}
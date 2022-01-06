import React from 'react'
import moment from 'moment'

const RecentThoughtsList = ({ recentThoughts, onLikes, onDelete }) => {
  return (
    <section className='recent-thoughts-section'>
      {recentThoughts.length > 0 ? (
        <>
          {recentThoughts.map((thought) => (
            <div key={thought._id} className='thought-card'>
              <p>{thought.message}</p>
              <div className='heart-timestamp-container'>
                <p className='hearts-container'>
                  <button
                    aria-label='Like this post'
                    type='button'
                    className='heart-emoji'
                    style={{
                      backgroundColor:
                        thought.hearts > 0 ? '#ffadad' : '#eaeaea',
                    }}
                    onClick={() => onLikes(thought._id)}
                  >
                    <span role='img' aria-label='heart emoji'>
                      ❤️
                    </span>
                  </button>
                  &nbsp;<span aria-hidden='true'>x</span>&nbsp;
                  <span>{thought.hearts} likes</span>
                </p>
                <p>{moment(thought.createdAt).fromNow()}</p>
              </div>
              <button
                aria-label='Delete this post'
                type='button'
                className='delete-button'
                onClick={() => onDelete(thought._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </>
      ) : (
        <div className='thought-card'>
          <p>
            No posts yet. Add a happy post above{' '}
            <span role='img' aria-label='Emoji Pointing Up'>
              ☝️
            </span>
          </p>
        </div>
      )}
    </section>
  )
}

export default RecentThoughtsList

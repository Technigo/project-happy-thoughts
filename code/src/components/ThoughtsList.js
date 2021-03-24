import React from 'react'
import moment from 'moment'

const ThoughtsList = ({thought, LIKE_URL, thoughtsList, setThoughtsList}) => {

  //When the heart button is clicked update the number of likes on the server by using fetch post request and update also the local state of all happy thoughts
  const onLikesIncrease = (id) => {
    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(LIKE_URL(id), postRequest)
      .then(response => response.json())
      .then(receivedThought => {
        const updatedThoughtList = thoughtsList.map(thought => {
          if (thought._id === receivedThought._id) {
            thought.hearts += 1
          } 
          return thought
        })
        setThoughtsList(updatedThoughtList)
      })
      .catch(error => console.error(error))
   }

  return (
    <div className='thought-card'>
      <p className='thought-message'>{thought.message}</p>
      <div className='likes-time-wrapper'>
        <p className='thought-time'>{moment(thought.createdAt).fromNow()}</p>
        <div className='likes-heart-wrapper'>
          <button className='heart-button' onClick={() => onLikesIncrease(thought._id)}>
            <span className={thought.hearts > 0 ? 'heart-button-liked' : 'heart-button-no-likes'} role='img' aria-label='heart emoji'>❤️</span>
          </button>
          <p className='likes-counter'>x {thought.hearts}</p>
        </div>
      </div>
    </div>
  )
}

export default ThoughtsList
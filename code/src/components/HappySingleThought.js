import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const HappySingleThought = ({ thoughtId, message, hearts, creationDate, handleHeartClick }) => {
  const creationDateObject = new Date(creationDate)
  const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true })

  const buttonWithoutLikes = (
    <button className="heart-button white-background" type="button" onClick={() => handleHeartClick(thoughtId)}>🤍</button>
  )
  const buttonWithLikes = (
    <button className="heart-button green-background" type="button" onClick={() => handleHeartClick(thoughtId)}>🤍</button>
  )
  return (
    <article className="card">
      <p>{message}</p>
      <div className="card-bottom">
        <div className="card-bottom-left">
          {hearts !== 0 ? buttonWithLikes : buttonWithoutLikes}
          <span> x {hearts}</span>
        </div>
        <div className="card-bottom-right">
          <p>{formattedCreationDate}</p>
        </div>
      </div>
    </article>
  )
}

export default HappySingleThought
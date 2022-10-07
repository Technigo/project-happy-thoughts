import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const HappySingleThought = ({ thoughtId, message, hearts, creationDate, handleHeartClick }) => {
  const creationDateObject = new Date(creationDate)
  const formattedCreationDate = formatDistanceToNow(creationDateObject, { addSuffix: true })

  return (
    <article className="card">
      <p>{message}</p>
      <div className="card-bottom">
        <div className="card-bottom-left">
          <button type="button" onClick={() => handleHeartClick(thoughtId)}>❤</button>
               x{hearts}
        </div>
        <div className="card-bottom-right">
          <p>{formattedCreationDate}</p>
        </div>
      </div>
    </article>
  )
}

export default HappySingleThought
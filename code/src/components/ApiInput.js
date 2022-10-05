import React from 'react'
import { formatDistance } from 'date-fns'

const ApiInput = ({ ApiThougth, loading, onLikeChange }) => {
  if (loading) {
    return <h1>loading in progress... </h1>
  }
  return (
    <section className="test">
      {ApiThougth.map((thougth, hearts) => {
        return (
          <div key={thougth.id} className="container-child">
            <p className="message">{thougth.message}</p>
            <div className="btn-container">
              <button
                type="button"
                className="btn-heart"
                key={hearts.id}
                onClick={() => onLikeChange([hearts.id])}>
                <span aria-label="heart emoji" className="heart-emoji"> ❤️
                </span>
              </button>
              <p className="likes"> x {thougth.hearts} </p>
            </div>
            <p className="date">{formatDistance(new Date(thougth.createdAt), Date.now())} </p>
          </div>
        )
      })}
    </section>
  )
}
export default ApiInput
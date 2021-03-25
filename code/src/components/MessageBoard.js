import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { API_URL } from '../reusable/urls'

import Loading from '../components/Loading'

const MessageBoard = ({ thoughts, setThoughts, myLikes, setMyLikes }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchThoughts = (url) => {
      setLoading(true)
      fetch(url)
        .then(response => response.json())
        .then(receivedThoughts => {
          setThoughts(receivedThoughts)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        })
        .catch(err => {
          setLoading(false)
          setError(true)
        })
    }
    fetchThoughts(API_URL)
  }, [setThoughts]);

  const onThoughtLiked = (thoughtLiked) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtLiked) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)

    if (myLikes.indexOf(thoughtLiked) === -1) {
      setMyLikes([thoughtLiked, ...myLikes])
    }

  }

  const onHeartClicked = (id) => {
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    }
    const hearts_url = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`

    fetch(hearts_url, options)
      .then(() => {
        onThoughtLiked(id)
      })
  }

  return loading ? <Loading loading={loading} /> : error ? <div className="api-error"> Oops, an error occured during API call!</div> : (
    <div className="message-board">
      {thoughts.map(thought => (
        <div className="message-container" key={thought._id}>
          <div className="thought-date-wrapper">
            <p className="thought">{thought.message}</p>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
          <div className="likes-container">
            <button
              id={thought._id}
              className={thought.hearts > 0 ? "heart-button pink" : "heart-button"}
              onClick={() => onHeartClicked(thought._id)}
            >
              {'\u2665'}
            </button>
            <p>x{thought.hearts}</p>
          </div>

        </div>
      ))}
    </div>
  )
}
export default MessageBoard
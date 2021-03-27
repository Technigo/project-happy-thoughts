import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { API_URL, HEARTS_URL } from '../reusable/urls'

import Loading from '../components/Loading'
import ErrorBoard from '../components/ErrorBoard'
import MyLikes from './MyLikes'

const MessageBoard = ({ thoughts, setThoughts, myLikes, setMyLikes }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const fetchThoughts = (url) => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(receivedThoughts => {
        console.log(receivedThoughts)
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

  useEffect(() => {
    fetchThoughts(API_URL)
  },[]);

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

    fetch(HEARTS_URL(id), options)
      .then(res => res.json())
      .then(() => {
        onThoughtLiked(id)
      })
  }

  return loading ? <Loading loading={loading} /> : error ? <ErrorBoard /> : (
    <div className="message-board">
      <MyLikes 
      fetchThoughts= {fetchThoughts}
      numberOfMyLikes = {myLikes.length}
      API_URL = {API_URL}
      />

      {/* <button onClick={() => fetchThoughts(API_URL)} >Update board</button> */}
      {thoughts.map(thought => (
        <div className="message-container" key={thought._id}>
          <div className="thought-date-wrapper">
            <p className="thought">{thought.message}</p>
            <p className={`date ${moment(thought.createdAt).fromNow()=== "a few seconds ago"? `red`: null}`}>{moment(thought.createdAt).fromNow()=== "a few seconds ago"? "New message": moment(thought.createdAt).fromNow()} </p>
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
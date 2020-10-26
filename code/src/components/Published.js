import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const Published = () => {
  const posted_url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const like = "https://happy-thoughts-technigo.herokuapp.com/thoughts/{pubPost._id}/like"
  const [pubPosts, setPubPosts] = useState([])


  // const handleLike = event => {

  // }

  useEffect(() => {
    fetch(posted_url)
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setPubPosts(data.reverse())
      })
  }, [])
  

  return (
    <div>
      {pubPosts.map(pubPost => (
        <p 
          key={pubPost._id} 
          className="pubPost">
            {pubPost.message}
          <span className="post-time">
            {moment(pubPost.createdAt).fromNow()}
          </span>
          <p>
            <span 
              className="heart-button" 
              // onClick={}
              role="heart emoji as a Like button">❤️</span>
               x {pubPost.hearts}
          </p>
        </p> 
      ))
      }
    </div>
  )
}
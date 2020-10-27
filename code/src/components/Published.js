import React, { useState, useEffect } from 'react'
import moment from 'moment'

export const Published = () => {
  const posted_url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const like = "https://happy-thoughts-technigo.herokuapp.com/thoughts/{pubPost._id}/like"
  const [pubPosts, setPubPosts] = useState([])


  // const handleLike = event => {
    // this needs to POST the like and refresh the page
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
  
  // the messages need to be sorted with the newest on top
  return (
    <section>
      {pubPosts.map(pubPost => (
        <article 
          key={pubPost._id} 
          className="pubPost">
            <p className="post-txt">
              {pubPost.message}
            </p>

          <p className="post-info"> 
            <span className="post-time">
              {moment(pubPost.createdAt).fromNow()}
            </span>
            <span 
                className="heart-button" 
                // onClick={}
                role="heart emoji as a Like button">❤️
              </span>
            <div className="likes"></div>

              <p className="like-count">
                x {pubPost.hearts}
              </p>         
            
            
            
          </p>
      </article>
      ))
      }
    </section>
  )
}
import React, { useEffect, useState } from 'react'
import { PostedText } from './PostedText'
import { Hearts } from './Hearts'
import { Time } from './Time'
import './PostedThought.css'

export const PostedThought = () => {
  const [postedThought, setPostedThought] = useState([])

  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(res => res.json())
      .then(json => setPostedThought(json))
  }
  )

  return (
    <div>
      {postedThought.map((item) => (
        <div
          className="message-box"
          key={item._id}>
          <PostedText
            text={item.message}
          />
          <div className="hearts-time">
            <Hearts
              hearts={item.hearts}
            />
            <Time
              time={item.createdAt}
            />
          </div>
        </div>
      ))
      }
    </div>

  )


  // export const PostedMessages = (props) => {
  //   return (
  //     <div>
  //       <PostedThoughts
  //         thought={props.postedThought.message} />
  //       <Hearts />
  //     </div>
  //   )


}
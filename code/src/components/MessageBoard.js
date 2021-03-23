import React, { useEffect } from 'react'
import moment from 'moment'


import { API_URL } from '../reusable/urls'

const MessageBoard = ({ thoughts, setThoughts }) => {
  const fetchThoughts = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setThoughts(data)
      })
  }
  
  useEffect(() => {
    fetchThoughts()
  }, [thoughts, setThoughts]);

  
  return (
    <div>
      {thoughts.map(thought => (
        <div className="message-container" key={thought._id}>
          <p className="thought">{thought.message}</p>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </div>
  )

}
export default MessageBoard
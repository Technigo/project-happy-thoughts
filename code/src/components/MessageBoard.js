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

  const onThoughtLiked = (thoughtLiked) => {
    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === thoughtLiked) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

// const onHeartClicked = () => {
//   const options = {
//     method:"POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body:""
//   }
//   const hearts_url = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`

//   fetch(hearts_url, options)
//     .then(()=>{
//       onThoughtLiked(thought._id)
//     })
// }

  

  return (
    <div>
      {thoughts.map(thought => (
        <div className="message-container" key={thought._id}>
          <p className="thought">{thought.message}</p>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
          <div className="likes-container">
            <button 
            id={thought._id}
            className={thought.hearts>0? "heart-button pink": "heart-button"}
            onClick={() =>{
              const options = {
                method:"POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body:""
              }
              const hearts_url = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`
            
              fetch(hearts_url, options)
                .then(()=>{
                  onThoughtLiked(thought._id)
                })
            }}
            >
            {'\u2764'}
            </button>
            <p>x{thought.hearts}</p>
          </div>

        </div>
      ))}
    </div>
  )

}
export default MessageBoard
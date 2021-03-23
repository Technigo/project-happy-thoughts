import React from 'react'


//import { API_URL } from '../reusable/urls'

const MessageBoard = ({ thoughts, setThoughts }) => {
  // useEffect(() => {
  //   fetchThoughts()
  // }, []);

  // const fetchThoughts = () => {
  //   fetch(API_URL)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setThoughts(data)
  //     })
  //}
  return (
    <div>
      {thoughts.map(thought => (
        <div className="board-container" key={thought._id}>
          <div>{thought.message}</div>
          <div>{thought.createdAt}</div>
        </div>
      ))}
    </div>
  )

}
export default MessageBoard
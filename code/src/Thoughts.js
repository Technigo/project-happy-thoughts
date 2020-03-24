// import React, {useState, useEffect} from 'react'
import moment from 'moment'
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
// import heart from './heart.png'
// import {LikeButton} from './LikeButton'
import React from 'react'



export const PostedThoughts = (props) => {
  // const MESSAGE_URL = 'https://technigo-thoughts.herokuapp.com/'
  
  const { message, createdAt, hearts, _id } = props.thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST', 
    })
    .then(() => props.onLiked(_id))}

  // const [message, setMessage] = useState([])
  return (
  <div className="Message-list">
    <div className="each-thought" >
      <div  className="thought"> {message} </div>
        <div className="time-and-likes"> 
        <span> <button 
        style= {hearts > 0 ? {backgroundColor: 'rgba(253, 174, 229, 0.896)'} : {backgroundColor: 'rgba(134, 105, 126, 0.279'}}
        className="heart-button" onClick={handleClick}> <span> ❤️ </span> </button> <span> x {hearts}</span> </span> 
          <span>{moment(createdAt).fromNow()}</span> 
    </div>

    </div>
   
    {/* <p>{props.thought.message}</p>
    <p>{props.thought.hearts} hearts </p>
    <LikeButton id={props.thought._id} onLiked={props.onLiked}/> */}
  </div>
  )  }
//   useEffect(() => {
//     fetch(MESSAGE_URL)
//       .then((res) => {
//         return res.json()
//       })
//       .then(data => { 
//         setMessage(data)
//   });
// }, []);

// const onLiked = thoughtId => {
//   const updatedThoughts = message.map(thought => {
//     if (thought.id === thoughtId) {
//       thought.hearts += 1
//     }
//     return thought
//   })

//   setMessage(updatedThoughts)
// }


//   return (
//    <div className="Message-list">
//     {
//       message.map(post => ( 
//       <div className="each-thought">
//         <p className="thought" key={post._id}> 
//         {post.message} 
//         <p className="time-and-likes"> <span className="likes"> 
//         <LikeButton key={post._id} onLiked ={onLiked}/>
//           {/* <button><img className="heart-button" src={heart} alt="heart icon"/></button>  */}
//           x {post.hearts} </span> <span> {moment(post.createdAt).fromNow()} </span> </p>
//         </p>
//     </div>
   
//       ))
// }

//     </div>
      
//   ) 
  

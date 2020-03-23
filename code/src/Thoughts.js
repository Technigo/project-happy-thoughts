import React, {useState, useEffect} from 'react'
import moment from 'moment'
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import heart from './heart.png'



export const Thoughts = () => {
  const MESSAGE_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [message, SetMessage] = useState([])
  

  useEffect(() => {
    fetch(MESSAGE_URL)
      .then((res) => {
        return res.json()
      })
      .then(data => { 
        SetMessage(data)
  });
}, []);


  return (
   <div className="Message-list">
    {
      message.map(post => ( 
      <div className="each-thought">
        <p className="thought" key={post._id}> 
        {post.message} 
        <p className="time-and-likes"> <span className="likes"> <button><img src={heart} alt="heart icon"/></button> x {post.hearts} </span> <span> {moment(post.createdAt).fromNow()} </span> </p>
        </p>
    </div>
   
      ))
}

    </div>
      
  ) 
}

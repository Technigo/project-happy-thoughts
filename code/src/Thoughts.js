import React, {useState, useEffect} from 'react'
import TimeAgo from 'react-timeago'
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'



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
   <div>
    {
      message.map(post => ( 
      <p className="thought" key={post._id}> 
      {post.message} 
      <span className="thought-time"> <TimeAgo date={post.createdAt} /> </span>
      </p>
    // <div className="eachThought">
      
      //  <div>  </div> 
      //  <div> &hearts; x {thought.hearts} 
      //  </div>
    // </div>
   
      ))
}
    </div>
      
  ) 
}
import React, {useState, useEffect} from 'react'
import TimeAgo from 'react-timeago'
// import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {AddThoughts} from './AddThoughts'


export const Thoughts = () => {
  const [thoughts, SetThoughts] = useState([])
  const APIdata = 'https://technigo-thoughts.herokuapp.com/'
  
  useEffect(() => {
    fetch(APIdata)
    .then(result => result.json())
    .then(json => SetThoughts (json))
  })

  return (
   <section>
   
    {thoughts.map(thought => ( 
   
    <div key={thought._id} className="eachThought">
      
       <div> {thought.message} </div> 
       <div> &hearts; x {thought.hearts} <TimeAgo date={thought.createdAt} />
       </div>
    </div>
   
   
    ))}
    </section>
  
  ) 
}
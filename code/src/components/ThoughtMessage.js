import React from 'react';
import moment from 'moment'

export const ThoughtMessage = ({thought, onLikeThought}) => {
  const onLikeClick = event => {
    const LIKE_URL=`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`
    
    event.preventDefault()
        fetch(LIKE_URL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:''
        }).then(()=> onLikeThought(thought._id)) 
    } 

  return (
    <article key={thought._id}>
    <p className='thought'>
      {thought.message}
    </p> 
    <button
      onClick={onLikeClick}
    >
      <span role='img' aria-label='heart'>
        {'❤️'}
      </span>
    </button>
    <p>x {thought.hearts}</p>
    <span className='thought-time'>
      {moment(thought.createdAt).fromNow()}
    </span>
  </article>  
  )
}
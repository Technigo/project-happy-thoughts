import React from 'react';
import moment from 'moment'

export const ThoughtMessage = ({message, time, likes, id, handleLikeThought}) => {
   
   const LIKE_URL=`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`
  /*const [like, setLike] = useState(0) *//* Should this be here or in the thoughtList component? */
 
  const onLikeClick = event => {
    event.preventDefault()
        fetch(LIKE_URL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:''
        }).then(()=> handleLikeThought(id)) 
    } 
    
    return (
      <article>
            <p className='thought'>
            {message}
            </p> 
            <button
             onClick={onLikeClick}
            >
                <span role='img' aria-label='heart'>
                {'❤️'}
                </span>
            </button>
            <p>x {likes}</p>
            <span className='thought-time'>
                {moment(time).fromNow()}
            </span>
        </article>
         
    )
}
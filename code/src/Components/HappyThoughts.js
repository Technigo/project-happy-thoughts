import React, {useState} from 'react';
import moment from 'moment';


export const HappyThoughts = props => {
  const {message,hearts,createdAt,_id: id} = props.thought
  const [likes, setLikes] = useState(hearts)

  const handleClick = () => {
    fetch(`https://sara-happythought.herokuapp.com/${id}/like`, {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" }
    })
    .then(setLikes(likes + 1))
    .catch(err => console.log('error', err))
}

  return (
    <article className="happy-thoughts">
    <h3>{message}</h3>
    <p>
      <button className="happy-heart"
      onClick={handleClick}
      style={{background: hearts > 0 ? "#ffadad" : "#f3f1f1  " }}
      >
      <span role="img" aria-label="Heart"> 
      {"❤️"}
      </span>
      </button>
      x {hearts}
    </p>
    <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}